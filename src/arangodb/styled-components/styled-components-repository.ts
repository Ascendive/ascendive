import { aql } from 'arangojs'
import { Connect } from '../connection'
import { FieldIdentifier } from '../../fields/FieldIdentifier'
import { ArrayCursor } from 'arangojs/cursor'
import  styled  from 'styled-components'

// TODO So we're going to need to figure out the exact paramerters for component style identification
// maybe just field type, and collation id but that depends on how specific the field type is.
export async function GetStyledFieldByIdentifier(id: FieldIdentifier): Promise<ArrayCursor<any>> {
    const db = Connect()
    const field = id.fieldType;
    const collation = id.collationType;
    const playbookId = id.playbookId;
    db.collection("styled-components")
    const query = aql`FOR component in styled-components FILTER component.field == ${field} FILTER RETURN component`
    var results = await db.query(query)
    const ok = styled.div``
    return results;
    // results.a
}
export default GetStyledFieldByIdentifier;
