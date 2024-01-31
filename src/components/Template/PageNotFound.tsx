const PageNotFound = () => {
    return(
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-gray-700">404</h1>
                <p className="text-lg text-gray-600">Page Not Found</p>
                <p className="text-gray-500 mt-2">The requested page could not be found.</p>
                <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Go back to home</a>
            </div>
        </div>
    )
}
export default PageNotFound;