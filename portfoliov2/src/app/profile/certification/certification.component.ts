import {Component, OnDestroy, OnInit} from '@angular/core';
import {CertificationDTO} from 'src/app/dto/certification-dto';
import {ICertificationState} from 'src/app/store/Certification/ICertification.State';
import {AbstractProfileComponent} from '../AbstractProfile.Component';
import * as fromApp from '../../store/IApp.State';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent
  extends AbstractProfileComponent<CertificationDTO, ICertificationState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'certificationState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
