import './HeaderFormat.css';
// eslint-disable-next-line react/prop-types
function HeaderFormat({companyLogo}) {

    return (

    <header>
        <span><img src={companyLogo} alt="Logo"/></span>
    </header>
)

}

export default HeaderFormat