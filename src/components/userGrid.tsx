import { Database } from "arangojs";
import { useState } from "react";
import { useEffect } from "react";
import { ArangodbUserRepository } from "../user/arangodb-user-repository";
import { User } from "../user/user";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Search, ToolbarItems, Toolbar } from '@syncfusion/ej2-react-grids';

export function UserGrid(props: { db: Database; }): JSX.Element {
    const toolbarOptions: ToolbarItems[] = ['Search'];
    const [users, setUsers] = useState<User[]>()
    useEffect(() => {
        async function getUser() {
            const repo = new ArangodbUserRepository(props.db);
            const user = await repo.getAllUsers(); //  "99837"
            setUsers(user);

        }

        getUser();
    }, [props.db]);
    return (
        <>
            {/* <div className='control-pane'>
                <div className='control-section'> */}
            <div className="title default">
                <GridComponent dataSource={users} height='300' gridLines="Both" allowSorting={true} toolbar={toolbarOptions}>
                    <ColumnsDirective>
                        <ColumnDirective field='displayName' headerText='Name' width='15' textAlign='Left' />
                        <ColumnDirective field='email' headerText='Email' width='20' textAlign='Left' />
                        <ColumnDirective field='company' headerText='Company' width='7' textAlign='Left' />
                        <ColumnDirective field='primaryWorkCity' headerText='City' width='5' textAlign='Left' />
                        <ColumnDirective field='jobTitle' headerText='Title' width='8' textAlign='Left' />

                    </ColumnsDirective>
                    <Inject services={[Sort, Search, Toolbar]} />
                </GridComponent>
            </div>
            {/* </div> */}
        </>
    )
}
