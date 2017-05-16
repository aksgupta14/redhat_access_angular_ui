'use strict';

export default class DiscussionService {
    constructor($location, $q, AlertService, AttachmentsService, CaseService, strataService, HeaderService, securityService, COMMON_CONFIG) {
        'ngInject';

        this.discussionElements = [];
        this.chatTranscriptList = [];
        this.comments = CaseService.comments;
        this.attachments = AttachmentsService.originalAttachments;
        this.externalUpdates = CaseService.externalUpdates;
        this.loadingAttachments = false;
        this.loadingComments = false;
        this.commentTextBoxEnlargen = false;
        this.getDiscussionElements = function (caseId) {
            var attachPromise = null;
            var commentsPromise = null;
            var externalUpdatesPromise = null;
            this.discussionElements = [];
            this.loadingAttachments = true;
            if(!COMMON_CONFIG.isGS4) {
                attachPromise = strataService.cases.attachments.list(caseId).then(angular.bind(this, function (attachmentsJSON) {
                    AttachmentsService.defineOriginalAttachments(attachmentsJSON);
                    this.loadingAttachments = false;
                }), angular.bind(this, function (error) {
                    if (!HeaderService.pageLoadFailure) {
                        AlertService.addStrataErrorMessage(error);
                    }
                    this.loadingAttachments = false;
                }));
            }
            commentsPromise = CaseService.populateComments(caseId).then(function () {
            }, function (error) {
                if (!HeaderService.pageLoadFailure) {
                    AlertService.addStrataErrorMessage(error);
                }
            });
            externalUpdatesPromise = CaseService.populateExternalUpdates(caseId).then(function () {
            }, function (error) {
                if (!HeaderService.pageLoadFailure) {
                    AlertService.addStrataErrorMessage(error);
                }
            });
            //TODO should this be done in case service???
            this.loadingComments = true;
            if(COMMON_CONFIG.isGS4) {
                return $q.all([commentsPromise, externalUpdatesPromise]);
            }
            return $q.all([attachPromise, commentsPromise, externalUpdatesPromise]);

        };
        this.updateElements = function () {
            this.comments = CaseService.comments;
            this.attachments = AttachmentsService.originalAttachments;
            this.externalUpdates = CaseService.externalUpdates;
            this.discussionElements = this.comments.concat(this.attachments);
            this.discussionElements = this.discussionElements.concat(this.externalUpdates);
            if (this.chatTranscriptList !== undefined && this.chatTranscriptList.length > 0) {
                this.discussionElements = this.discussionElements.concat(this.chatTranscriptList);
            }
        };
    }
}
