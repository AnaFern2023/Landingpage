const textFirstSection = [
    {
        img: "🧹",
        header: "Brand Identity",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores modi alias quas, dolores aperiam adipisci odit a quasi accusamus consequuntur, iste illum explicabo tempora! Distinctio illum sunt praesentium repudiandae?"
    },
    {
        img: "🖼️",
        header: "Illustration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores modi alias quas, dolores aperiam adipisci odit a quasi accusamus consequuntur, iste illum explicabo tempora! Distinctio illum sunt praesentium repudiandae?"
    },
    {
        img: "🎥",
        header: "Marketing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores modi alias quas, dolores aperiam adipisci odit a quasi accusamus consequuntur, iste illum explicabo tempora! Distinctio illum sunt praesentium repudiandae?"
    },
    {
        img: "🌎",
        header: "Web Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores modi alias quas, dolores aperiam adipisci odit a quasi accusamus consequuntur, iste illum explicabo tempora! Distinctio illum sunt praesentium repudiandae?"
    }
]


const Firstsection = () => {
    return (
        <section>
            <p className="firstsection_what">What We Wo</p>
            <p className="firstsection_header">We've got everything you need to launch and grow your business</p>
            <div className="section_grid">
                {textFirstSection.map((element) =>
                    <article >
                        <div className="section_flex">
                            <p className="section_img">{element.img}</p>
                            <div className="section_column">
                                <h3>{element.header}</h3>
                                <p>{element.text}</p>
                            </div>
                        </div>
                    </article>
                )}
            </div>
        </section>
    );
}

export default Firstsection;