const textHead = [
    {
        number: 127,
        description: "Award Received"
    },
    {
        number: 1505,
        description: "Cup of Coffee"
    },
    {
        number: 109,
        description: "Projects Completed"
    },
    {
        number: 102,
        description: "Happy Clients"
    }
]

const Header = () => {
    return (
        <section className='textHead'>
            <h3>Hello There</h3>
            <h1>We Are Glint</h1>
            <p className='first_lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi temporibus ducimus tempore repellat corrupti tenetur tempora ea laboriosam praesentium dignissimos mollitia officiis placeat distinctio fugit nam, sunt beatae odio voluptatum!</p>
            <div className='textheader_grid'>
                {textHead.map((element) => {
                    return (
                        <div>
                            <p className="numberHead">{element.number}</p>
                            <p className="header_description">{element.description}</p>
                        </div>
                    )
                }
                )
                }</div>
        </section>
    );
}
export default Header;