const addActivities = async (inputValue: string, id_User: string, token: string) => {
    const data = {
        "name": inputValue,
        "id_User": id_User
    }

    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/postNewTag/${id_User}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

export default addActivities;