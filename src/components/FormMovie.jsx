import React from 'react';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        // Créer les binds des méthodes qu'on va utiliser
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // Créer une methode onChange permettant de mettre à jour les champs contrôlés dans le formulaire
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    // Afin de gérer manuellement l'envoi du formulaire, on va devoir "désactiver" le comportement du navigateur lors de la soumission d'un formulaire. On va donc créer notre méthode onSubmit qui sera appelé sur notre formulaire. (voir doc "preventDefault" section "Ressources")
    submitForm(e) {
        e.preventDefault();
    
    
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
    };

    const url = "http://92.175.11.66:3001/api/quests/movies/";

    fetch(url, config)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
            alert(`Film ajouté avec l'ID ${res}!`);
        }
    }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un film');
    });
}
    render() {
       
        
        return (
            <div className="FormEmployee">
                <h1>Saisi d'un Film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Nom du film</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Poster</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    };
}

export default FormMovie;