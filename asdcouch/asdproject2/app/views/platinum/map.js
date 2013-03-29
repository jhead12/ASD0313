function (doc){
	if (doc._id.substr(0, 15) === "platinumstatus:") {
		emit(doc.id, {
			"badge": doc._attachments,
			"Name": doc.status,	
			"shares": doc.shares,
			"backstage":doc.backstage,
			"bonus":doc.bonus
			
		});
	}
};