﻿
import synchronizationDetail = require("models/filesystem/synchronizationDetail");
import synchronizationReport = require("models/filesystem/synchronizationReport");


class synchronizationDetails {
    pending: synchronizationDetail[];
    active: synchronizationDetail[];
    finished: synchronizationReport[];

    constructor() {
        this.pending = [];
        this.active = [];
        this.finished = [];
    }

    static fromOutgoingActivities(pending: filesystemSynchronizationDetailsDto[], active: filesystemSynchronizationDetailsDto[]) {
        var details = new synchronizationDetails();
        details.active.pushAll(active.map(x => new synchronizationDetail(x)));
        details.pending.pushAll(pending.map(x => new synchronizationDetail(x)));
        return details;
    }

    static fromIncomingActivities(finished: filesystemSynchronizationReportDto[]) {
        var details = new synchronizationDetails();
        details.finished.pushAll(finished.map(x => new synchronizationReport(x)));
        return details;
    }
} 

export = synchronizationDetails;