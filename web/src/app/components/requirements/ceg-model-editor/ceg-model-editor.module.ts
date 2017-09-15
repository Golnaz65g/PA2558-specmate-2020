import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../../core/core.module';
import { SpecmateFormsModule } from '../../forms/specmate-forms.module';
import { CEGModelDetails } from './ceg-model-details.component';
import { GraphicalEditor } from "../../core/graphical/graphical-editor.component";
import { CEGGraphicalNode } from "../../core/graphical/elements/ceg/ceg-graphical-node.component";
import { CEGGraphicalArc } from "../../core/graphical/elements/ceg/ceg-graphical-arc.component";
import { CEGGraphicalConnection } from "../../core/graphical/elements/ceg/ceg-graphical-connection.component";
import { GraphicalElementDetails } from "../../core/graphical/graphical-element-details.component";

@NgModule({
    imports: [
        CoreModule,
        FormsModule,
        SpecmateFormsModule
    ],
    exports: [],
    declarations: [
        CEGModelDetails,
        GraphicalEditor,
        CEGGraphicalNode,
        CEGGraphicalArc,
        CEGGraphicalConnection,
        GraphicalElementDetails
    ],
    providers: [],
})
export class CEGModelEditorModule { }
