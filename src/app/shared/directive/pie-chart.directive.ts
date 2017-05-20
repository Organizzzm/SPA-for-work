import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[pie-chart]' })

export class PieChartDirective implements OnInit {
    @Input('pie-chart') percent: any;

    private cumulativePercent: number = 0;
    private svgEl: any;
    private slice: any;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.innerHTML = this.percent + '%';

        this.svgEl = this.el.nativeElement;
        this.slice = {
            percent: parseInt(this.percent) / 100,
            color: 'orange'
        };

        const [startX, startY] = this.getCoordinatesForPercent(this.cumulativePercent);

        // each slice starts where the last slice ended, so keep a cumulative percent
        this.cumulativePercent += this.slice.percent;

        const [endX, endY] = this.getCoordinatesForPercent(this.cumulativePercent);

        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = this.slice.percent > .5 ? 1 : 0;

        // create an array and join it just for code readability
        const pathData = [
            `M ${startX} ${startY}`, // Move
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
            `L 0 0`, // Line
        ].join(' ');

        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', pathData);
        pathEl.setAttribute('fill', this.slice.color);

        this.svgEl.appendChild(pathEl);
    }

    getCoordinatesForPercent(percent: any) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    }

}


