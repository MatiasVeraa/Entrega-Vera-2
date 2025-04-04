export const withLoading = (Component) => {
    function ComponentWithLoading(props) {
      const { items } = props;
  
      if (!items) return <h2>No hay productos disponibles.</h2>;
  
      if (items.length === 0) {
        return <h2>Cargando...</h2>;
      }
  
      return <Component {...props} />;
    }
  
    return ComponentWithLoading;
  };