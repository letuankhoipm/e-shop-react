import firebase from './firebase.service';

class CoreService {
    onGetCollection(collection) {
        return firebase.firestore().collection(collection);
    }

    onHandlingData(querySnapshot, dataModel, data) {
        return querySnapshot.forEach((doc) => {
            const { ...dataModel } = doc.data();
            data.push({
                key: doc.id,
                doc,
                ...dataModel
            });
        });
    }
}

export default new CoreService();