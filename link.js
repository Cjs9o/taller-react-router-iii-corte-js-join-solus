const Link = ({ href, children }) => {
  const onClick = (event) => {
    // Permitir comportamiento normal si se usa Ctrl/Cmd + Click
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, "", href);

    // Avisar a la aplicación que la URL ha cambiado
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};