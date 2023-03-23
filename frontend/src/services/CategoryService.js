export async function getAllCategories() {

    try {

        const response = await fetch('http://localhost:3000/categories');

        if (response.ok) {

            console.log(await response.json());

        }

    } catch(error) {
        console.log(error);
    }
}