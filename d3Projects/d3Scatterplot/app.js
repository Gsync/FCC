const [w, h, p] = [800, 600, 50];
const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
d3.json(url, function(error, data) {
    if (error) throw error;

    const yScale = d3.scaleLinear()
                        .domain([d3.max(data, d=>d.Place)+1, 0])
                        .range([h-p, p]);

    

    const xScale = d3.scaleLinear()
        .domain([d3.max(data, d => d.Seconds)+10, d3.min(data, d => d.Seconds)])
                        .range([p, w-p]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    d3.select('svg')
        .append('g')
        .attr('transform', `translate(0 , ${h-p})`)
        .call(xAxis);

    d3.select('svg')
        .append('g')
        .attr('transform', `translate(${p}, 0)`)
        .call(yAxis);

    let svg = d3.select('svg')
                    .attr('width', w)
                    .attr('height', h);

        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
                .attr('cx', d=>xScale(d.Seconds))
                .attr('cy', d=>yScale(d.Place))
                .attr('fill', d => d.Doping ? 'red' : 'blue')
                .attr('r', 5)
                .attr('stroke', '#fff');

        svg.append('text')
            .attr('x', w/2)
            .attr('y', h-p)
            .text('Time in Seconds')
            .style('text-anchor', 'middle')
            .attr('dy', '2.5em');
            
        svg.append('text')
            .attr('x', -h/2)
            .attr('y', p)
            .text('Ranking')
            .style('text-anchor', 'middle')
            .attr('dy', '-2em')
            .attr('transform', 'rotate(-90)');

})