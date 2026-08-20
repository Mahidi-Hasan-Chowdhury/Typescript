function getTea(kind: string | number)
{
    if(typeof kind === 'string')
    {
        return `Making ${kind} Tea`
    }
    return `Tea Order: ${kind}`
}


function serveTea(msg?: string)
{
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving Default Red Tea`;

}

