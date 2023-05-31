/**
 * Give absolute path for the resource 
 * in the assets folder.
 * 
 * @param String path 
 * @returns String
 */
export default function Asset(path){
    return require(`../Assets/`+path.trimStart("/"));
}