import { Tag } from "../components/HappinessForm";

type FormValues = {
    happinessIndex: number;
    activities: Tag[];
    date: Date;
    description: string;
    id_User: string;
};


const addPost = async (data: FormValues, token: string) => {
    
    let activityList: Array<{ name: Tag, id_User: string }> = []; // Déclarer une liste vide par défaut

    if (data.activities.length > 0) {
        activityList = data.activities.map((activity) => ({
            name: activity,
            id_User: data.id_User,
        }));
    }
    
    const post = {
        "happinessIndex": data.happinessIndex,
        "activities": activityList,
        "date": data.date,
        "description": data.description,
        "id_User": data.id_User
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/postNewPost/${data.id_User}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if (response.ok) {
            const responseData = await response.json();
            // Traitez la réponse de la requête POST ici
            if (responseData.error) {
                alert(responseData.msg)
            }
        } else {
            // Gérez les erreurs de la requête POST ici
            throw new Error('Erreur de la requête POST');
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

export default addPost;