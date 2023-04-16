import {Component, Input} from '@angular/core';
import {CertificationDetailDTO} from "../../dto/certification-detail-dto";

@Component({
  selector: 'app-certification-grid',
  templateUrl: './certification-grid-component.html',
  styleUrls: ['./certification-grid-component.css']
})
export class CertificationGridComponent {
  @Input() certificationDetails!: CertificationDetailDTO[];
}
