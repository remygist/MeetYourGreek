export default
class Timeline{
    constructor(id,title,description,image){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
    }

    get htmlContainerData(){
        return`     
        <div class="timelineContainer">
        <h1>${this.title}</h1>
                <p>
                    ${this.description}
                </p></div><div class="imgContainer">
                <img src="${this.image}" />
            </div>
        `
    }

    get htmlSidebarData(){
        return`
        <div class="timelineItem" id="${this.id}"><h1>${this.title}</h1></div>
        `
    }
}