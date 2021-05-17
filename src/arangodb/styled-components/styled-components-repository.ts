import { aql } from 'arangojs'
import { Connect } from '../connection'
// import { styled } from 'styled-components'
// import { FieldTypes } from '../../fields/FieldTypes'

// TODO So we're going to need to figure out the exact paramerters for component style identification
// maybe just field type, and collation id but that depends on how specific the field type is.
export async function GetStyledFieldByIdentifier() {
    const db = Connect()
    db.collection("styled-components")
    const query = aql`FOR component in styled-components FILTER component.id == ${id} RETURN component`
    var results = await db.query(query)
    // results.a
}
