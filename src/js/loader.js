// export const loadGallery = () => {window.addEventListener("load", ()=>
//     {const loader = document.querySelector('.loader')
//     .setTimeout(startLoad,1500)
//         const startLoad = () => {loader.classList.remove("loader-hidden")
//         .setTimeout(stopLoad, 1500)
//             const stopLoad = () => { loader.classList.add("loader-hidden") }}})}


    export const loadGallery = () => {window.addEventListener("load", ()=>{
        const loader = document.querySelector('.loader')
        loader.classList.remove("loader-hidden")
        let timeout
        timeout = setTimeout(()=>{loader.classList.add("loader-hidden")},1500) 
        console.log(loader.classList)})
        }

    export const loadMovie = () => {
        const gallery = document.querySelector('form')
        gallery.addEventListener("submit", ()=>{
            const loader = document.querySelector('.loader')
            loader.classList.remove("loader-hidden")
            let timeout
            timeout = setTimeout(()=>{loader.classList.add("loader-hidden")},1500) 
            console.log(loader.classList)})}