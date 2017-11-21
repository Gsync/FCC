const [w, h, p] = [600, 600, 50];
const dataUrl = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

d3.json(dataUrl, function(data) {

    console.table(data.data);
});