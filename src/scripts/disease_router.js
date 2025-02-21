export default function()
{
    let disease_links = Array.from(document.getElementsByClassName("disease-link-list"));
    disease_links.forEach((link) => {
        link.addEventListener("click", () => {
            let disease = link.getAttribute("link");
            window.location.href = `${disease}`

        })        
    });

}