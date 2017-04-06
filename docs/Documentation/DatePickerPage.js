/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, IconButton,CardHeader,DatePicker,Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../../lib';
import Highlight from 'react-highlight.js'


export default class ChipPage extends React.Component {

    state = {dialog: false, open: false};

    render() {

        let document = `
<div>
    <DatePicker/>
    <DatePicker value="Fri Apr 30 2027 23:47:26 GMT+0300 (+03)"/>
    <DatePicker value="Fri Apr 30 2017 23:47:26 GMT+0300 (+03)" open={this.state.open} onClose={this.closeDatepicker} />
    <IconButton onClick={this.openDatePicker} iconName={"date_range"}/>
</div>   
        `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="DatePicker"/>
                <div style={{margin: "0 auto"}}>
                    <DatePicker/>
                    <div style={{padding: 16}}></div>
                    <DatePicker value="Fri Apr 30 2027 23:47:26 GMT+0300 (+03)"/>
                    <div style={{padding: 16}}></div>
                    <DatePicker value="Fri Apr 30 2017 23:47:26 GMT+0300 (+03)" open={this.state.open}
                                onClose={() => this.setState({open: false})}/>
                    <IconButton onClick={() => this.setState({open: true})} iconName={"date_range"}/>
                </div>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="Datepicker properties"/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Props</TableHeaderColumn>
                            <TableHeaderColumn>Type</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>open</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, dialog opens as dialog and shows cancel and ok buttons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>value</TableRowColumn>
                            <TableRowColumn>Date</TableRowColumn>
                            <TableRowColumn>You can send a date as string.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClose</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Fire when dialog close.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gets value of date.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}