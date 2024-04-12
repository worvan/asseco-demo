import { Route } from '@angular/router';
import {RemoteEntryComponent} from "../../../remote-app/src/app/remote-entry/entry.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
  },
];
