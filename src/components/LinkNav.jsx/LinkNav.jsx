import PropTypes from 'prop-types'

const LinkNav = ({route}) => {
    return (
        <li key={route.id} className=" hover:bg-yellow-700 px-7 "><a href={route.path}>
            {route.name}</a></li>
    );
};
LinkNav.propTypes={
    route:PropTypes.obj,
}

export default LinkNav;