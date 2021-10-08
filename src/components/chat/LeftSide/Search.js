
function Search({setSearchText}) {
    
    return (
        <div className="p-5 h-20">
            <input className="block w-full bg-primary border p-1" placeholder="Search" type="text" onChange={e => {
                setSearchText(e.target.value)
            }} />
        </div>
    )
}

export default Search
