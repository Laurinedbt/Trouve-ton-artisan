import { Breadcrumb } from 'react-bootstrap';
import { useLocation, NavLink } from 'react-router-dom';

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Si on est sur la page d'accueil, ne rien afficher
  if (pathnames.length === 0) return null;

  return (
    <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
      <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: '/' }}>
        Accueil
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item
            key={routeTo}
            linkAs={NavLink}
            linkProps={{ to: routeTo }}
            active={isLast}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
