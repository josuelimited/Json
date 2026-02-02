// Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

const solicitudPOST = async (userId)=>{
fetch(`http://localhost:3000/posts${userId}`,{
    method:'PUT',
    body: JSON.stringify({
    userId: id,
    title:`la web va a fallar`,
    body: `el clima esta muy friooo`
    }),
    headers:{
    'Content-type': 'aplication/json; charset=UTF-8',
    },
})
 .then((response) => response.json())
 .then((json)=> console.log(json));
}
solicitudPOST(2);