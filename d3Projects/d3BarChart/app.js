const margin = { top: 20, right: 100, bottom: 20, left: 100 };
const w = 1000 - margin.left - margin.right;
const h = 600 - margin.top - margin.bottom;
const dataUrl = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const format = d3.timeFormat('%Y-%m-%d');

d3.json(dataUrl, function(data) {

    let data2 = data.data;
    let svg = d3.select('svg')
                    .attr('width', w+margin.left+margin.right)
                    .attr('height', h+margin.top+margin.bottom)
                    .attr('transform', `translate(${margin.left}, ${margin.top})`);

    let xScale = d3.scaleTime()
                    .domain(d3.extent(data2, d=>new Date(d[0])))
                    .range([0, w]);

    let yScale = d3.scaleLinear()
                    .domain([0, d3.max(data2, d=>d[1])])
                    .range([h, 0]);

    let yAxis = d3.axisLeft(yScale);
    let xAxis = d3.axisBottom(xScale)
                    .tickFormat(d3.timeFormat('%Y'));

    svg.append('g')
        .call(yAxis);
    svg.append('g')
        .attr('transform', `translate(0, ${h})`)
        .call(xAxis);

    svg.selectAll('rect')
        .data(data2)
        .enter()
        .append('rect')
        .attr('y', d => yScale(d[1]))
        .attr('x', d => xScale(new Date(d[0])))
        .attr('width', w/data2.length)
        .attr('height', d => h - yScale(d[1]))
        .style('fill', 'steelblue')
        .on('mouseover', function (d) {
            d3.select(this).style('opacity', 0.5)
            let tooltip = d3.select('#tooltip');
            tooltip.style('left', d3.event.pageX + 'px');
            tooltip.style('top', d3.event.pageY + 'px');
            tooltip.html(
                '<div>' + d[1] + 'B' + '</div>'
                + '<div>' + d[0] + '</div>'
            );
            tooltip.classed('hidden', false);
        })
        .on('mouseout', function (d) {
            d3.select(this).style('opacity', 1)
            d3.select('#tooltip').classed('hidden', true);
        });
    
    //y-axis title
    svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -h/2)
        .attr('y', 15)
        .style('text-anchor', 'middle')
        .text('Gross Domestic Product, USA');

    //x-axis title
    svg.append('text')
        .attr('x', w / 2)
        .attr('y', h+40)
        .style('text-anchor', 'middle')
        .text('Year');

});