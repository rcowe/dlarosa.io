import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";

export default class Contact extends Component {
    state = {
        name: "",
        message: "",
        email: "",
        subject: "",
        sent: false,
        buttonText: "Send Message",
        emailError: false,
    };

    handleChangeEmail(e) {
        if (
            !e.target.value.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            this.setState({
                email: e.target.value,
            });
            this.setState({ emailError: true });

            if (this.state.email === "") {
                // check if the input is empty
                this.setState({ emailError: false });
            }
        } else {
            this.setState({ email: e.target.value, emailError: false });
        }
    }

    resetForm = () => {
        this.setState({
            name: "",
            message: "",
            email: "",
            subject: "",
            buttonText: "Message Sent",
        });

        setTimeout(() => {
            this.setState({ sent: false });
        }, 3000);
    };


    formSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            buttonText: "...sending",
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject,
        };

        try {
            await axios.post("https://simple-backend-nodemailer.herokuapp.com/api/v1", data);
            this.setState({ sent: true }, this.resetForm());
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <Grid container
                  spacing={2}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <Typography variant="h1" component="h2">
                        Drop me a line
                    </Typography>
                </Grid>
                <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            placeholder="Enter your name"
                            label="Name"
                            variant="outlined"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            required
                            type="text"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: 50 }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            placeholder="Enter email address"
                            variant="outlined"
                            value={this.state.email}
                            onChange={(e) => this.handleChangeEmail(e)}
                            error={this.state.emailError}
                            required
                            type="email"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: 45 }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="outlined-basic"
                            placeholder="Subject"
                            label="Subject"
                            variant="outlined"
                            value={this.state.subject}
                            onChange={(e) => this.setState({ subject: e.target.value })}
                            required
                            type="text"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: 50 }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Message"
                            placeholder="Enter Message"
                            variant="outlined"
                            multiline
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value })}
                            required
                            type="text"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ margin: 50 }}
                        />
                    </Grid>

                    <Grid item align="center">
                        <div className="button--container">
                            <button type="Send Story" className="button button-primary">
                                {this.state.buttonText}
                            </button>
                        </div>
                    </Grid>
                </form>

            </Grid>

        )
    }
}