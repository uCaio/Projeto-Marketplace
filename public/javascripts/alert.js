if (window.location.search.includes("error")) {
    setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("error");
        window.history.replaceState({}, document.title, url.pathname);
    }, 500);
}
