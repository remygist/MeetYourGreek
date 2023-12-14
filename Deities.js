export default
class Deities{
    constructor(id,name,title,description,image){
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.image = image;
    }

    get htmlContainerData(){
        return`     
        <div class="deityContainer">
        <h1>${this.name}, ${this.title}</h1>
                <p>
                    ${this.description}
                </p></div>
        `
    }

    get htmlSidebarData(){
        return`
        <div class="deityItem" id="${this.id}"><h1>${this.name}, ${this.title}</h1>  </div>
        `
    }
}