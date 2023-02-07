import "./style.css"

const Header = () => {
    return ( 
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>
                    Hi, my name is <em>Alexey</em>
                </strong>
                <br/>
            a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
                <a href="https://ekaterinburg.hh.ru/resume/b09cc247ff066b7d820039ed1f7a6f6a49564c" target ="blank" className="btn">
                go to resume
                </a>
        </div>
</header>
);
}
 
export default Header;