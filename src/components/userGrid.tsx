import { Database } from "arangojs";
import { useState } from "react";
import { useEffect } from "react";
import { ArangodbUserRepository } from "../user/arangodb-user-repository";
import { User } from "../user/user";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Search, ToolbarItems, Toolbar } from '@syncfusion/ej2-react-grids';
import { PdfExport } from "@syncfusion/ej2-grids";

export let data2: any[] = [
    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }, { x: new Date(2011, 0, 1), y: 84 }
];
export function UserGrid(): JSX.Element {
    const toolbarOptions: ToolbarItems[] = ['Search'];
    const db = new Database({
        url: "http://localhost:8529",
        databaseName: "ascendive",
        auth: { username: "react", password: "react" }
    });
    const [users, setUsers] = useState<User[]>()
    useEffect(() => {
        async function getUser() {
            const repo = new ArangodbUserRepository(db);
            const user = await repo.getAllUsers(); //  "99837"
            setUsers(user);
        }

        getUser();
    }, []);
    return (
        <>
            {/* <div className='control-pane'>
                <div className='control-section'> */}
            <div className="title default">
                <GridComponent dataSource={users} height='80' gridLines="Both" allowSorting={true} toolbar={toolbarOptions}>
                    <ColumnsDirective>
                        <ColumnDirective field='displayName' headerText='Name' width='15' textAlign='Left' />
                        <ColumnDirective field='email' headerText='Email' width='20' textAlign='Left' />
                        <ColumnDirective field='company' headerText='Company' width='7' textAlign='Left' />
                        <ColumnDirective field='primaryWorkCity' headerText='City' width='5' textAlign='Left' />
                    </ColumnsDirective>
                    <Inject services={[Sort, Search, Toolbar]} />
                </GridComponent>
            </div>
            {/* </div> */}
        </>
    )
}
