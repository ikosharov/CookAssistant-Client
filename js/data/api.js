'use strict';

import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import { API_URL } from './../../web.config';
import { store } from '../store';

export function signIn(username, password) {
    let credentials = {
        username: username,
        password: password
    };

    let url = `${API_URL}/signin`;

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(credentials)
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function signUp(username, password) {
    let credentials = {
        username: username,
        password: password
    };

    let url = `${API_URL}/signup`;

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(credentials)
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function loadCurrentUserRecipes() {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes?user=current`;

    let options = {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function loadAnyUserRecipes() {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes?visibility=public`;

    let options = {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function loadRecipeDetails(recipeId) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}`;

    let options = {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function deleteRecipe(recipeId) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}`;

    let options = {
        "method": "DELETE",
        "headers": {
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function editRecipeDetails(recipeId, recipe) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}`;

    let form = new FormData();
    form.append("data", JSON.stringify(recipe));
    if (recipe.image) {
        form.append("image", recipe.image);
    }

    let options = {
        "method": "PUT",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function addRecipe(recipe) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes`;

    let form = new FormData();
    form.append("data", JSON.stringify(recipe));
    if (recipe.image) {
        form.append("image", recipe.image);
    }

    let options = {
        "method": "POST",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function createIngredient(recipeId, ingredient) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/ingredients`;

    let form = new FormData();
    form.append("data", JSON.stringify(ingredient));
    if (ingredient.image) {
        form.append("image", ingredient.image);
    }

    let options = {
        "method": "POST",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function editIngredient(recipeId, ingredient) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredient._id}`;

    let form = new FormData();
    form.append("data", JSON.stringify(ingredient));
    if (ingredient.image) {
        form.append("image", ingredient.image);
    }

    let options = {
        "method": "PUT",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function deleteIngredient(recipeId, ingredientId) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredientId}`;

    let options = {
        "method": "DELETE",
        "headers": {
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function createStep(recipeId, step) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/steps`;

    let form = new FormData();
    form.append("data", JSON.stringify(step));
    if (step.image) {
        form.append("image", step.image);
    }

    let options = {
        "method": "POST",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 200) {
                reject();
            } else {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function editStep(recipeId, step) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/steps/${step._id}`;

    let form = new FormData();
    form.append("data", JSON.stringify(step));
    if (step.image) {
        form.append("image", step.image);
    }

    let options = {
        "method": "PUT",
        "headers": {
            "Authorization": "JWT " + auth.token
        },
        "body": form
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}

export function deleteStep(recipeId, stepId) {
    let auth = store.getState().auth;

    let url = `${API_URL}/recipes/${recipeId}/steps/${stepId}`;

    let options = {
        "method": "DELETE",
        "headers": {
            "Authorization": "JWT " + auth.token
        }
    };

    let promise = new Promise((resolve, reject) => {
        fetch(url, options).then((response) => {
            // this will not reject on error. only on network failure
            if (response.status != 204) {
                reject();
            } else {
                resolve();
            }
        }).catch(() => {
            // network failure
            reject();
        });
    });

    return promise;
}