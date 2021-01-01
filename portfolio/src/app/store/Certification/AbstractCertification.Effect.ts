import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractCertificationStoreAction } from './AbstractCertification.StoreAction';
import { ICertificationState } from './ICertification.State';

export abstract class AbstractCertificationEffect<
  TAction extends AbstractCertificationStoreAction
> extends AbstractAppEffect<CertificationDTO, ICertificationState, TAction> {}
