import mockFileData from './assets/sample_data.hbs?raw';
import dummyjson from 'dummy-json';

//const mockFileData = fs.readFileSync('assets/sample_data.hbs', { encoding: 'utf8' });
/*const dummyData = dummyjson.parse(mockFileData).replaceAll("undefined", "");
const mockData = JSON.parse(dummyData);
console.log("const mockData", mockData);*/
function sendRequest(uri) {
    return fetch("/sample_data.json").then(r => {
        return r.json();
    }).then(r => {
            const mockData = r;
            uri = new URL(uri, "https://www.test.com");
            const parameters = uri.searchParams;
            const resourcePath = uri.pathname.split("/").slice(2);
            const resource = parseResource(mockData, resourcePath);
            return parseParameters(resource, parameters);
        }
    );
}

function parseResource(mockData, resourcePath) {
    let result = mockData;
    resourcePath.reverse();
    let resourceName = resourcePath.pop();
    let metrics = {};
    let parents = [];
    while (resourceName !== undefined) {
        result = result[resourceName+"s"];
        metrics[resourceName+"s"] = result && result.length;
        console.log("resource: ", resourceName, result && result.length);
        let id = resourcePath.pop();
        if (id !== undefined && result !== undefined) {
            result = result.find(x => x[resourceName+"_id"] === +id);
            parents.push([resourceName+"_id", +id]);
        }
        resourceName = resourcePath.pop();
    }
    result && parents.forEach(p => {result[p[0]] = p[1];})
    result && (result.metrics = metrics);
    return result
}

function parseParameters(resource, parameters) {
    if (parameters === undefined || resource === undefined || !resource.hasOwnProperty("length")) {
        return resource;
    }
    if (parameters.has("filter")) {
        const filters = parameters.get("filter").split(",");
        for (let filter of filters) {
            const [filterName, filterValue] = filter.split("=");
            resource = resource.filter(x => x[filterName] == filterValue);
            //resource.metrics[filterName] = resource.length;
        }
    }

    if (parameters.has("tri")) {
        const tri = parameters.get("tri");
        resource = resource.sort((a,b) => a.hasOwnProperty(tri) && b.hasOwnProperty(tri) && a[tri] - b[tri]);
    }

    return resource;
}

export default sendRequest;