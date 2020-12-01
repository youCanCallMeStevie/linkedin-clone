import React from 'react';
import { DropdownButton, Dropdown, Col, Container, Row } from 'react-bootstrap';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import './footerr.css'

export default function Footerr() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p className="footerPar">About</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Accessibility</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Talent Solutions</p>
                        </Col>
                        <Col>
                            <HelpIcon id="helpIc" />
                            <label className="helpText" id="helpIcLab" for="helpIc" >
                                Questions?
                            </label>

                        </Col>
                        <Col>
                            <DropdownButton
                                direction="up"
                                title="Language"
                            >
                                <Dropdown.Item><p className="dropdownText">العربية (Arabic)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">čeština (Czech)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Dansk (Danish)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Detusch (German)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Español (Spanish)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Français (French)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Bahasda Indonesia (Bahasda Indonesia)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Italiano (Italian)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">日本人 (Japanese)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">한국어 (Korean)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Bahasa Malasya (Malay)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Netherlands (Dutch)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Norsk (Norwegian)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Polski (Polish)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Português (Portuguese)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Română (Romanian)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">русский (Russian)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Svenska (Swedish)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">ภาษาไทย (Thai)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Tagalog (Tagalog)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">Türkçe (Turkish)</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">简体中文 (Chinise (Simplified))</p></Dropdown.Item>
                                <Dropdown.Item><p className="dropdownText">繁體中文 (Chinsie (Traditional))</p></Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="footerPar">Community Guidelines</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Careeers</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Marketing Solutions</p>
                        </Col>
                        <Col>
                            <p className="helpText">Visit our Help Center</p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="footerPar">Privacy & Terms</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Ad Choices</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Advertising</p>
                        </Col>
                        <Col>
                            <SettingsIcon id="settIcon" />
                            <label className="helpText" for="settIcon" >
                                Account Settings
                            </label>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="footerPar">Sales Solutions</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Mobile</p>
                        </Col>
                        <Col>
                            <p className="footerPar">Small Business</p>
                        </Col>
                        <Col>
                            <p className="helpText">Go to your Settings</p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="footerPar">Safety</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="footerPar">LinkedIn Corporation © 2020</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
