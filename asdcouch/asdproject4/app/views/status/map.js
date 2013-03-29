function (doc){
	if (doc._id.substr(0, 11) === "userstatus:") {
		emit(doc.id, {
			"badge": doc._attachments,
			"Name": doc.status,
			"shares": doc.shares,
			"message":doc.message
		});
	}
};