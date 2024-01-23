/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

/** Connection between the AgentFields type and the ContentNode type */
export type AcfContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the AcfContentNodeConnection connection */
		edges: Array<AcfContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: AcfContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type AcfContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;AcfContentNodeConnection&quot; */
export type AcfContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
	/**
	 * The name of the field group
	 * @deprecated Use __typename instead
	 */
	fieldGroupName?: Maybe<Scalars["String"]["output"]>;
};

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
	/**
	 * The name of the field group
	 * @deprecated Use __typename instead
	 */
	fieldGroupName?: Maybe<Scalars["String"]["output"]>;
};

/** A group of fields representing a Google Map */
export type AcfGoogleMap = {
	/** The city associated with the map */
	city?: Maybe<Scalars["String"]["output"]>;
	/** The country associated with the map */
	country?: Maybe<Scalars["String"]["output"]>;
	/** The country abbreviation associated with the map */
	countryShort?: Maybe<Scalars["String"]["output"]>;
	/** The latitude associated with the map */
	latitude?: Maybe<Scalars["Float"]["output"]>;
	/** The longitude associated with the map */
	longitude?: Maybe<Scalars["Float"]["output"]>;
	/** The country associated with the map */
	placeId?: Maybe<Scalars["String"]["output"]>;
	/** The post code associated with the map */
	postCode?: Maybe<Scalars["String"]["output"]>;
	/** The state associated with the map */
	state?: Maybe<Scalars["String"]["output"]>;
	/** The state abbreviation associated with the map */
	stateShort?: Maybe<Scalars["String"]["output"]>;
	/** The street address associated with the map */
	streetAddress?: Maybe<Scalars["String"]["output"]>;
	/** The street name associated with the map */
	streetName?: Maybe<Scalars["String"]["output"]>;
	/** The street number associated with the map */
	streetNumber?: Maybe<Scalars["String"]["output"]>;
	/** The zoom defined with the map */
	zoom?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the PropertieFields type and the MediaItem type */
export type AcfMediaItemConnection = Connection &
	MediaItemConnection & {
		/** Edges for the AcfMediaItemConnection connection */
		edges: Array<AcfMediaItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MediaItem>;
		/** Information about pagination in a connection. */
		pageInfo: AcfMediaItemConnectionPageInfo;
	};

/** Connection between the AgentFields type and the MediaItem type */
export type AcfMediaItemConnectionEdge = Edge &
	MediaItemConnectionEdge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: MediaItem;
	};

/** Page Info on the &quot;AcfMediaItemConnection&quot; */
export type AcfMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms address field. */
export type AddressField = FormField &
	GfFieldWithAddressSetting &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCopyValuesOptionSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSubLabelPlacementSetting & {
		/** Determines the type of address to be displayed. */
		addressType?: Maybe<AddressFieldTypeEnum>;
		/** Address field value. */
		addressValues?: Maybe<AddressFieldValue>;
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** The field id of the field being used as the copy source. */
		copyValuesOptionFieldId?: Maybe<Scalars["Int"]["output"]>;
		/** The label that appears next to the copy values option when the form is displayed. The default value is \“Same as previous\”. */
		copyValuesOptionLabel?: Maybe<Scalars["String"]["output"]>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the country that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;INTERATIONAL&quot;. */
		defaultCountry?: Maybe<AddressFieldCountryEnum>;
		/** Contains the province that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;CANADA&quot;. */
		defaultProvince?: Maybe<AddressFieldProvinceEnum>;
		/** Contains the state that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;US&quot;. */
		defaultState?: Maybe<AddressFieldProvinceEnum>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Indicates whether the copy values option can be used. This option allows users to skip filling out the field and use the same values as another. For example, if the mailing and billing address are the same. */
		shouldCopyValuesOption?: Maybe<Scalars["Boolean"]["output"]>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Countries supported by Gravity Forms Address Field. */
export type AddressFieldCountryEnum =
	/** Andorra . */
	| "AD"
	/** United Arab Emirates . */
	| "AE"
	/** Afghanistan . */
	| "AF"
	/** Antigua and Barbuda . */
	| "AG"
	/** Anguilla . */
	| "AI"
	/** Albania . */
	| "AL"
	/** Armenia . */
	| "AM"
	/** Angola . */
	| "AO"
	/** Antarctica . */
	| "AQ"
	/** Argentina . */
	| "AR"
	/** American Samoa . */
	| "AS"
	/** Austria . */
	| "AT"
	/** Australia . */
	| "AU"
	/** Aruba . */
	| "AW"
	/** Åland Islands . */
	| "AX"
	/** Azerbaijan . */
	| "AZ"
	/** Bosnia and Herzegovina . */
	| "BA"
	/** Barbados . */
	| "BB"
	/** Bangladesh . */
	| "BD"
	/** Belgium . */
	| "BE"
	/** Burkina Faso . */
	| "BF"
	/** Bulgaria . */
	| "BG"
	/** Bahrain . */
	| "BH"
	/** Burundi . */
	| "BI"
	/** Benin . */
	| "BJ"
	/** Saint Barthélemy . */
	| "BL"
	/** Bermuda . */
	| "BM"
	/** Brunei Darussalam . */
	| "BN"
	/** Bolivia . */
	| "BO"
	/** Bonaire, Sint Eustatius and Saba . */
	| "BQ"
	/** Brazil . */
	| "BR"
	/** Bahamas . */
	| "BS"
	/** Bhutan . */
	| "BT"
	/** Bouvet Island . */
	| "BV"
	/** Botswana . */
	| "BW"
	/** Belarus . */
	| "BY"
	/** Belize . */
	| "BZ"
	/** Canada . */
	| "CA"
	/** Cocos Islands . */
	| "CC"
	/** Congo, Democratic Republic of the . */
	| "CD"
	/** Central African Republic . */
	| "CF"
	/** Congo . */
	| "CG"
	/** Switzerland . */
	| "CH"
	/** Côte d'Ivoire . */
	| "CI"
	/** Cook Islands . */
	| "CK"
	/** Chile . */
	| "CL"
	/** Cameroon . */
	| "CM"
	/** China . */
	| "CN"
	/** Colombia . */
	| "CO"
	/** Costa Rica . */
	| "CR"
	/** Cuba . */
	| "CU"
	/** Cabo Verde . */
	| "CV"
	/** Curaçao . */
	| "CW"
	/** Christmas Island . */
	| "CX"
	/** Cyprus . */
	| "CY"
	/** Czechia . */
	| "CZ"
	/** Germany . */
	| "DE"
	/** Djibouti . */
	| "DJ"
	/** Denmark . */
	| "DK"
	/** Dominica . */
	| "DM"
	/** Dominican Republic . */
	| "DO"
	/** Algeria . */
	| "DZ"
	/** Ecuador . */
	| "EC"
	/** Estonia . */
	| "EE"
	/** Egypt . */
	| "EG"
	/** Western Sahara . */
	| "EH"
	/** Eritrea . */
	| "ER"
	/** Spain . */
	| "ES"
	/** Ethiopia . */
	| "ET"
	/** Finland . */
	| "FI"
	/** Fiji . */
	| "FJ"
	/** Falkland Islands . */
	| "FK"
	/** Micronesia . */
	| "FM"
	/** Faroe Islands . */
	| "FO"
	/** France . */
	| "FR"
	/** Gabon . */
	| "GA"
	/** United Kingdom . */
	| "GB"
	/** Grenada . */
	| "GD"
	/** Georgia . */
	| "GE"
	/** French Guiana . */
	| "GF"
	/** Guernsey . */
	| "GG"
	/** Ghana . */
	| "GH"
	/** Gibraltar . */
	| "GI"
	/** Greenland . */
	| "GL"
	/** Gambia . */
	| "GM"
	/** Guinea . */
	| "GN"
	/** Guadeloupe . */
	| "GP"
	/** Equatorial Guinea . */
	| "GQ"
	/** Greece . */
	| "GR"
	/** South Georgia and the South Sandwich Islands . */
	| "GS"
	/** Guatemala . */
	| "GT"
	/** Guam . */
	| "GU"
	/** Guinea-Bissau . */
	| "GW"
	/** Guyana . */
	| "GY"
	/** Hong Kong . */
	| "HK"
	/** Heard Island and McDonald Islands . */
	| "HM"
	/** Honduras . */
	| "HN"
	/** Croatia . */
	| "HR"
	/** Haiti . */
	| "HT"
	/** Hungary . */
	| "HU"
	/** Indonesia . */
	| "ID"
	/** Ireland . */
	| "IE"
	/** Israel . */
	| "IL"
	/** Isle of Man . */
	| "IM"
	/** India . */
	| "IN"
	/** British Indian Ocean Territory . */
	| "IO"
	/** Iraq . */
	| "IQ"
	/** Iran . */
	| "IR"
	/** Iceland . */
	| "IS"
	/** Italy . */
	| "IT"
	/** Jersey . */
	| "JE"
	/** Jamaica . */
	| "JM"
	/** Jordan . */
	| "JO"
	/** Japan . */
	| "JP"
	/** Kenya . */
	| "KE"
	/** Kyrgyzstan . */
	| "KG"
	/** Cambodia . */
	| "KH"
	/** Kiribati . */
	| "KI"
	/** Comoros . */
	| "KM"
	/** Saint Kitts and Nevis . */
	| "KN"
	/** Korea, Democratic People's Republic of . */
	| "KP"
	/** Korea, Republic of . */
	| "KR"
	/** Kuwait . */
	| "KW"
	/** Cayman Islands . */
	| "KY"
	/** Kazakhstan . */
	| "KZ"
	/** Lao People's Democratic Republic . */
	| "LA"
	/** Lebanon . */
	| "LB"
	/** Saint Lucia . */
	| "LC"
	/** Liechtenstein . */
	| "LI"
	/** Sri Lanka . */
	| "LK"
	/** Liberia . */
	| "LR"
	/** Lesotho . */
	| "LS"
	/** Lithuania . */
	| "LT"
	/** Luxembourg . */
	| "LU"
	/** Latvia . */
	| "LV"
	/** Libya . */
	| "LY"
	/** Morocco . */
	| "MA"
	/** Monaco . */
	| "MC"
	/** Moldova . */
	| "MD"
	/** Montenegro . */
	| "ME"
	/** Saint Martin . */
	| "MF"
	/** Madagascar . */
	| "MG"
	/** Marshall Islands . */
	| "MH"
	/** North Macedonia . */
	| "MK"
	/** Mali . */
	| "ML"
	/** Myanmar . */
	| "MM"
	/** Mongolia . */
	| "MN"
	/** Macao . */
	| "MO"
	/** Northern Mariana Islands . */
	| "MP"
	/** Martinique . */
	| "MQ"
	/** Mauritania . */
	| "MR"
	/** Montserrat . */
	| "MS"
	/** Malta . */
	| "MT"
	/** Mauritius . */
	| "MU"
	/** Maldives . */
	| "MV"
	/** Malawi . */
	| "MW"
	/** Mexico . */
	| "MX"
	/** Malaysia . */
	| "MY"
	/** Mozambique . */
	| "MZ"
	/** Namibia . */
	| "NA"
	/** New Caledonia . */
	| "NC"
	/** Niger . */
	| "NE"
	/** Norfolk Island . */
	| "NF"
	/** Nigeria . */
	| "NG"
	/** Nicaragua . */
	| "NI"
	/** Netherlands . */
	| "NL"
	/** Norway . */
	| "NO"
	/** Nepal . */
	| "NP"
	/** Nauru . */
	| "NR"
	/** Niue . */
	| "NU"
	/** New Zealand . */
	| "NZ"
	/** Oman . */
	| "OM"
	/** Panama . */
	| "PA"
	/** Peru . */
	| "PE"
	/** French Polynesia . */
	| "PF"
	/** Papua New Guinea . */
	| "PG"
	/** Philippines . */
	| "PH"
	/** Pakistan . */
	| "PK"
	/** Poland . */
	| "PL"
	/** Saint Pierre and Miquelon . */
	| "PM"
	/** Pitcairn . */
	| "PN"
	/** Puerto Rico . */
	| "PR"
	/** Palestine, State of . */
	| "PS"
	/** Portugal . */
	| "PT"
	/** Palau . */
	| "PW"
	/** Paraguay . */
	| "PY"
	/** Qatar . */
	| "QA"
	/** Réunion . */
	| "RE"
	/** Romania . */
	| "RO"
	/** Serbia . */
	| "RS"
	/** Russian Federation . */
	| "RU"
	/** Rwanda . */
	| "RW"
	/** Saudi Arabia . */
	| "SA"
	/** Solomon Islands . */
	| "SB"
	/** Seychelles . */
	| "SC"
	/** Sudan . */
	| "SD"
	/** Sweden . */
	| "SE"
	/** Singapore . */
	| "SG"
	/** Saint Helena, Ascension and Tristan da Cunha . */
	| "SH"
	/** Slovenia . */
	| "SI"
	/** Svalbard and Jan Mayen . */
	| "SJ"
	/** Slovakia . */
	| "SK"
	/** Sierra Leone . */
	| "SL"
	/** San Marino . */
	| "SM"
	/** Senegal . */
	| "SN"
	/** Somalia . */
	| "SO"
	/** Suriname . */
	| "SR"
	/** South Sudan . */
	| "SS"
	/** Sao Tome and Principe . */
	| "ST"
	/** El Salvador . */
	| "SV"
	/** Sint Maarten . */
	| "SX"
	/** Syria Arab Republic . */
	| "SY"
	/** Eswatini . */
	| "SZ"
	/** Turks and Caicos Islands . */
	| "TC"
	/** Chad . */
	| "TD"
	/** French Southern Territories . */
	| "TF"
	/** Togo . */
	| "TG"
	/** Thailand . */
	| "TH"
	/** Tajikistan . */
	| "TJ"
	/** Tokelau . */
	| "TK"
	/** Timor-Leste . */
	| "TL"
	/** Turkmenistan . */
	| "TM"
	/** Tunisia . */
	| "TN"
	/** Tonga . */
	| "TO"
	/** Türkiye . */
	| "TR"
	/** Trinidad and Tobago . */
	| "TT"
	/** Tuvalu . */
	| "TV"
	/** Taiwan . */
	| "TW"
	/** Tanzania, the United Republic of . */
	| "TZ"
	/** Ukraine . */
	| "UA"
	/** Uganda . */
	| "UG"
	/** US Minor Outlying Islands . */
	| "UM"
	/** United States . */
	| "US"
	/** Uruguay . */
	| "UY"
	/** Uzbekistan . */
	| "UZ"
	/** Holy See . */
	| "VA"
	/** Saint Vincent and the Grenadines . */
	| "VC"
	/** Venezuela . */
	| "VE"
	/** Virgin Islands, British . */
	| "VG"
	/** Virgin Islands, U.S. . */
	| "VI"
	/** Viet Nam . */
	| "VN"
	/** Vanuatu . */
	| "VU"
	/** Wallis and Futuna . */
	| "WF"
	/** Samoa . */
	| "WS"
	/** Yemen . */
	| "YE"
	/** Mayotte . */
	| "YT"
	/** South Africa . */
	| "ZA"
	/** Zambia . */
	| "ZM"
	/** Zimbabwe . */
	| "ZW";

/** Input fields for Address FormField. */
export type AddressFieldInput = {
	/** Address city. */
	city?: InputMaybe<Scalars["String"]["input"]>;
	/** Address country. */
	country?: InputMaybe<AddressFieldCountryEnum>;
	/** Address line two. */
	lineTwo?: InputMaybe<Scalars["String"]["input"]>;
	/** Address state/region/province name. */
	state?: InputMaybe<Scalars["String"]["input"]>;
	/** Street address. */
	street?: InputMaybe<Scalars["String"]["input"]>;
	/** Address zip code. */
	zip?: InputMaybe<Scalars["String"]["input"]>;
};

/** Canadian Provinces supported by Gravity Forms Address Field. */
export type AddressFieldProvinceEnum =
	/** Alberta . */
	| "ALBERTA"
	/** British Columbia . */
	| "BRITISH_COLUMBIA"
	/** Manitoba . */
	| "MANITOBA"
	/** Newfoundland and Labrador . */
	| "NEWFOUNDLAND_AND_LABRADOR"
	/** New Brunswick . */
	| "NEW_BRUNSWICK"
	/** Northwest Territories . */
	| "NORTHWEST_TERRITORIES"
	/** Nova Scotia . */
	| "NOVA_SCOTIA"
	/** Nunavut . */
	| "NUNAVUT"
	/** Ontario . */
	| "ONTARIO"
	/** Prince Edward Island . */
	| "PRINCE_EDWARD_ISLAND"
	/** Quebec . */
	| "QUEBEC"
	/** Saskatchewan . */
	| "SASKATCHEWAN"
	/** Yukon . */
	| "YUKON";

/** Determines the type of address to be displayed. */
export type AddressFieldTypeEnum =
	/** Canada address type. */
	| "CANADA"
	/** International address type. */
	| "INTERNATIONAL"
	/** United States address type. */
	| "US";

/** The individual properties for each element of the address value field. */
export type AddressFieldValue = {
	/** Address city. */
	city?: Maybe<Scalars["String"]["output"]>;
	/** Address country. */
	country?: Maybe<AddressFieldCountryEnum>;
	/** Address line two. */
	lineTwo?: Maybe<Scalars["String"]["output"]>;
	/** Address state/region/province name. */
	state?: Maybe<Scalars["String"]["output"]>;
	/** Street address. */
	street?: Maybe<Scalars["String"]["output"]>;
	/** Address zip code. */
	zip?: Maybe<Scalars["String"]["output"]>;
};

/** AddressInputProperty input values. */
export type AddressInputProperty = GfFieldInput &
	GfFieldInputWithAddressSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** Whether or not this field should be hidden. */
		isHidden?: Maybe<Scalars["Boolean"]["output"]>;
		/** Key used to identify this input. */
		key?: Maybe<Scalars["String"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** The agent type */
export type Agent = ContentNode &
	DatabaseIdentifier &
	MenuItemLinkable &
	Node &
	NodeWithFeaturedImage &
	NodeWithTemplate &
	NodeWithTitle &
	Previewable &
	UniformResourceIdentifiable &
	WithAcfAgentFields & {
		/** Fields of the AgentFields ACF Field Group */
		agentFields?: Maybe<AgentFields>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		agentId: Scalars["Int"]["output"];
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The name of the Content Type the node belongs to */
		contentTypeName: Scalars["String"]["output"];
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Post publishing date. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars["String"]["output"]>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars["ID"]["output"]>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the agent object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars["String"]["output"]>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Agent type and the agent type */
		preview?: Maybe<AgentToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the object */
		status?: Maybe<Scalars["String"]["output"]>;
		/** The template assigned to the node */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The agent type */
export type AgentEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The agent type */
export type AgentEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The agent type */
export type AgentTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to agent Nodes */
export type AgentConnection = {
	/** A list of edges (relational context) between RootQuery and connected agent Nodes */
	edges: Array<AgentConnectionEdge>;
	/** A list of connected agent Nodes */
	nodes: Array<Agent>;
	/** Information about pagination in a connection. */
	pageInfo: AgentConnectionPageInfo;
};

/** Edge between a Node and a connected agent */
export type AgentConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected agent Node */
	node: Agent;
};

/** Page Info on the connected AgentConnectionEdge */
export type AgentConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The &quot;AgentFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type AgentFields = AcfFieldGroup &
	AcfFieldGroupFields &
	AgentFields_Fields & {
		/** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		agentsDescription?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		agentsLocation?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		avatar?: Maybe<AcfMediaItemConnectionEdge>;
		/** Field of the &quot;email&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		email?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The name of the field group
		 * @deprecated Use __typename instead
		 */
		fieldGroupName?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		phoneNumber?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
		relationWithProperties?: Maybe<AcfContentNodeConnection>;
	};

/** The &quot;AgentFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type AgentFieldsRelationWithPropertiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Interface representing fields of the ACF &quot;AgentFields&quot; Field Group */
export type AgentFields_Fields = {
	/** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	agentsDescription?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	agentsLocation?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	avatar?: Maybe<AcfMediaItemConnectionEdge>;
	/** Field of the &quot;email&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	email?: Maybe<Scalars["String"]["output"]>;
	/**
	 * The name of the field group
	 * @deprecated Use __typename instead
	 */
	fieldGroupName?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	phoneNumber?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;AgentFields&quot; Field Group */
	relationWithProperties?: Maybe<AcfContentNodeConnection>;
};

/** Interface representing fields of the ACF &quot;AgentFields&quot; Field Group */
export type AgentFields_FieldsRelationWithPropertiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type AgentIdType =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	| "SLUG"
	/** Identify a resource by the URI. */
	| "URI";

/** Connection between the Agent type and the agent type */
export type AgentToPreviewConnectionEdge = AgentConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Agent;
	};

/** The AM or PM cycle in a 12-hour clock. */
export type AmPmEnum =
	/** AM. The first 12-hour cycle of the day. */
	| "AM"
	/** PM. The second 12-hour cycle of the day. */
	| "PM";

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
	/** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
	default?: Maybe<Scalars["String"]["output"]>;
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr?: Maybe<Scalars["String"]["output"]>;
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the avatar was successfully found. */
	foundAvatar?: Maybe<Scalars["Boolean"]["output"]>;
	/** Height of the avatar image. */
	height?: Maybe<Scalars["Int"]["output"]>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating?: Maybe<Scalars["String"]["output"]>;
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme?: Maybe<Scalars["String"]["output"]>;
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size?: Maybe<Scalars["Int"]["output"]>;
	/** URL for the gravatar image source. */
	url?: Maybe<Scalars["String"]["output"]>;
	/** Width of the avatar image. */
	width?: Maybe<Scalars["Int"]["output"]>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export type AvatarRatingEnum =
	/** Indicates a G level avatar rating level. */
	| "G"
	/** Indicates a PG level avatar rating level. */
	| "PG"
	/** Indicates an R level avatar rating level. */
	| "R"
	/** Indicates an X level avatar rating level. */
	| "X";

/** A Gravity Forms captcha field. */
export type CaptchaField = FormField &
	GfFieldWithCaptchaBackgroundSetting &
	GfFieldWithCaptchaBadgeSetting &
	GfFieldWithCaptchaForegroundSetting &
	GfFieldWithCaptchaLanguageSetting &
	GfFieldWithCaptchaSizeSetting &
	GfFieldWithCaptchaThemeSetting &
	GfFieldWithCaptchaTypeSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting & {
		/** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
		captchaBadgePosition?: Maybe<CaptchaFieldBadgePositionEnum>;
		/** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
		captchaLanguage?: Maybe<Scalars["String"]["output"]>;
		/** Determines the theme to be used for the reCAPTCHA field. Only applicable to the recaptcha captcha type. */
		captchaTheme?: Maybe<CaptchaFieldThemeEnum>;
		/** Determines the type of CAPTCHA field to be used. */
		captchaType?: Maybe<CaptchaFieldTypeEnum>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** Determines the image’s background color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
		simpleCaptchaBackgroundColor?: Maybe<Scalars["String"]["output"]>;
		/** Determines the image’s font color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
		simpleCaptchaFontColor?: Maybe<Scalars["String"]["output"]>;
		/** Determines the CAPTCHA image size. Only applicable to simple_captcha and math captcha types. */
		simpleCaptchaSize?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The position to place the (invisible) reCaptcha badge. */
export type CaptchaFieldBadgePositionEnum =
	/** Bottom-left position. */
	| "BOTTOM_LEFT"
	/** Bottom-right position. */
	| "BOTTOM_RIGHT"
	/** Inline position. */
	| "INLINE";

/** The theme to be used for the reCAPTCHA field. */
export type CaptchaFieldThemeEnum =
	/** Dark reCAPTCHA theme. */
	| "DARK"
	/** Light reCAPTCHA theme. */
	| "LIGHT";

/** Type of CAPTCHA field to be used. */
export type CaptchaFieldTypeEnum =
	/** Math CAPTCHA type. */
	| "MATH"
	/** reCAPTCHA type. */
	| "RECAPTCHA"
	/** Simple CAPTCHA type. */
	| "SIMPLE";

/** The category type */
export type Category = DatabaseIdentifier &
	HierarchicalNode &
	HierarchicalTermNode &
	MenuItemLinkable &
	Node &
	TermNode &
	UniformResourceIdentifiable & {
		/** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		categoryId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the category type and its children categories. */
		children?: Maybe<CategoryToCategoryConnection>;
		/** Connection between the Category type and the ContentNode type */
		contentNodes?: Maybe<CategoryToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars["Int"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The description of the object */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The unique resource identifier path */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The link to the term */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the category type and its parent category. */
		parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars["ID"]["output"]>;
		/** Connection between the Category type and the post type */
		posts?: Maybe<CategoryToPostConnection>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Category type and the Taxonomy type */
		taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
		/** The name of the taxonomy that the object is associated with */
		taxonomyName?: Maybe<Scalars["String"]["output"]>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars["Int"]["output"]>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars["Int"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The category type */
export type CategoryAncestorsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The category type */
export type CategoryChildrenArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryContentNodesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The category type */
export type CategoryPostsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** Connection to category Nodes */
export type CategoryConnection = {
	/** A list of edges (relational context) between RootQuery and connected category Nodes */
	edges: Array<CategoryConnectionEdge>;
	/** A list of connected category Nodes */
	nodes: Array<Category>;
	/** Information about pagination in a connection. */
	pageInfo: CategoryConnectionPageInfo;
};

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected category Node */
	node: Category;
};

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type CategoryIdType =
	/** The Database ID for the node */
	| "DATABASE_ID"
	/** The hashed Global ID */
	| "ID"
	/** The name of the node */
	| "NAME"
	/** Url friendly name of the node */
	| "SLUG"
	/** The URI for the node */
	| "URI";

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection &
	Connection & {
		/** Edges for the CategoryToAncestorsCategoryConnection connection */
		edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Category>;
		/** Information about pagination in a connection. */
		pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
	};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Category;
	};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection &
	Connection & {
		/** Edges for the CategoryToCategoryConnection connection */
		edges: Array<CategoryToCategoryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Category>;
		/** Information about pagination in a connection. */
		pageInfo: CategoryToCategoryConnectionPageInfo;
	};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Category;
	};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the CategoryToContentNodeConnection connection */
		edges: Array<CategoryToContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: CategoryToContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Category;
	};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection &
	PostConnection & {
		/** Edges for the CategoryToPostConnection connection */
		edges: Array<CategoryToPostConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: CategoryToPostConnectionPageInfo;
	};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge &
	OneToOneConnection &
	TaxonomyConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Taxonomy;
	};

/** A Gravity Forms checkbox field. */
export type CheckboxField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSelectAllChoicesSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Checkbox field value. */
		checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the \&quot;select all\&quot; choice should be displayed. */
		hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** CheckboxFieldChoice choice values. */
export type CheckboxFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** Input fields for a single checkbox. */
export type CheckboxFieldInput = {
	/** Input ID. */
	inputId?: InputMaybe<Scalars["Float"]["input"]>;
	/** Input value. */
	value?: InputMaybe<Scalars["String"]["input"]>;
};

/** The individual properties for each element of the Checkbox value field. */
export type CheckboxFieldValue = GfFieldValueWithChoice &
	GfFieldValueWithInput & {
		/** The selected Gravity Forms field choice object. */
		connectedChoice?: Maybe<GfFieldChoice>;
		/** The selected Gravity Forms field input object. */
		connectedInput?: Maybe<GfFieldInput>;
		/** Input ID. */
		inputId?: Maybe<Scalars["Float"]["output"]>;
		/** Input text. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** Input value. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** CheckboxInputProperty input values. */
export type CheckboxInputProperty = GfFieldInput &
	GfFieldInputWithSelectAllChoicesSetting & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** A Comment object */
export type Comment = DatabaseIdentifier &
	Node & {
		/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
		agent?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
		 * @deprecated Deprecated in favor of the `status` field
		 */
		approved?: Maybe<Scalars["Boolean"]["output"]>;
		/** The author of the comment */
		author?: Maybe<CommentToCommenterConnectionEdge>;
		/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
		authorIp?: Maybe<Scalars["String"]["output"]>;
		/**
		 * ID for the comment, unique among comments.
		 * @deprecated Deprecated in favor of databaseId
		 */
		commentId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the Comment type and the ContentNode type */
		commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
		/** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
		content?: Maybe<Scalars["String"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier for the comment object */
		id: Scalars["ID"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
		karma?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the Comment type and the Comment type */
		parent?: Maybe<CommentToParentCommentConnectionEdge>;
		/** The database id of the parent comment node or null if it is the root comment */
		parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the parent comment node. */
		parentId?: Maybe<Scalars["ID"]["output"]>;
		/** Connection between the Comment type and the Comment type */
		replies?: Maybe<CommentToCommentConnection>;
		/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
		status?: Maybe<CommentStatusEnum>;
		/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
		type?: Maybe<Scalars["String"]["output"]>;
	};

/** A Comment object */
export type CommentContentArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A Comment object */
export type CommentParentArgs = {
	where?: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentRepliesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter &
	DatabaseIdentifier &
	Node & {
		/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
		avatar?: Maybe<Avatar>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The email for the comment author */
		email?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier for the comment author object */
		id: Scalars["ID"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** The name for the comment author. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** The url the comment author. */
		url?: Maybe<Scalars["String"]["output"]>;
	};

/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
	forceDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
	rating?: InputMaybe<AvatarRatingEnum>;
	size?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection to Comment Nodes */
export type CommentConnection = {
	/** A list of edges (relational context) between RootQuery and connected Comment Nodes */
	edges: Array<CommentConnectionEdge>;
	/** A list of connected Comment Nodes */
	nodes: Array<Comment>;
	/** Information about pagination in a connection. */
	pageInfo: CommentConnectionPageInfo;
};

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Comment Node */
	node: Comment;
};

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export type CommentNodeIdTypeEnum =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID";

/** The status of the comment object. */
export type CommentStatusEnum =
	/** Comments with the Approved status */
	| "APPROVE"
	/** Comments with the Unapproved status */
	| "HOLD"
	/** Comments with the Spam status */
	| "SPAM"
	/** Comments with the Trash status */
	| "TRASH";

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the CommentToCommentConnection connection */
		edges: Array<CommentToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: CommentToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Commenter;
	};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: ContentNode;
	};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Comment;
	};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** The author of a comment */
export type Commenter = {
	/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
	avatar?: Maybe<Avatar>;
	/** Identifies the primary key from the database. */
	databaseId: Scalars["Int"]["output"];
	/** The email address of the author of a comment. */
	email?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique identifier for the comment author. */
	id: Scalars["ID"]["output"];
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** The name of the author of a comment. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The url of the author of a comment. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Commenter Node */
	node: Commenter;
};

/** Options for ordering the connection */
export type CommentsConnectionOrderbyEnum =
	/** Order by browser user agent of the commenter. */
	| "COMMENT_AGENT"
	/** Order by approval status of the comment. */
	| "COMMENT_APPROVED"
	/** Order by name of the comment author. */
	| "COMMENT_AUTHOR"
	/** Order by e-mail of the comment author. */
	| "COMMENT_AUTHOR_EMAIL"
	/** Order by IP address of the comment author. */
	| "COMMENT_AUTHOR_IP"
	/** Order by URL address of the comment author. */
	| "COMMENT_AUTHOR_URL"
	/** Order by the comment contents. */
	| "COMMENT_CONTENT"
	/** Order by date/time timestamp of the comment. */
	| "COMMENT_DATE"
	/** Order by GMT timezone date/time timestamp of the comment. */
	| "COMMENT_DATE_GMT"
	/** Order by the globally unique identifier for the comment object */
	| "COMMENT_ID"
	/** Order by the array list of comment IDs listed in the where clause. */
	| "COMMENT_IN"
	/** Order by the comment karma score. */
	| "COMMENT_KARMA"
	/** Order by the comment parent ID. */
	| "COMMENT_PARENT"
	/** Order by the post object ID. */
	| "COMMENT_POST_ID"
	/** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
	| "COMMENT_TYPE"
	/** Order by the user ID. */
	| "USER_ID";

/** Gravity Forms conditional logic. */
export type ConditionalLogic = {
	/** The type of action the conditional logic will perform. */
	actionType?: Maybe<ConditionalLogicActionTypeEnum>;
	/** Determines how to the rules should be evaluated. */
	logicType?: Maybe<ConditionalLogicLogicTypeEnum>;
	/** Conditional logic rules. */
	rules?: Maybe<Array<Maybe<ConditionalLogicRule>>>;
};

/** The type of action the conditional logic will perform. */
export type ConditionalLogicActionTypeEnum =
	/** Text button (default). */
	| "HIDE"
	/** Image button. */
	| "SHOW";

/** Determines how to the rules should be evaluated. */
export type ConditionalLogicLogicTypeEnum =
	/** Evaulate all logic rules. */
	| "ALL"
	/** Evaluate any logic rule. */
	| "ANY";

/** Gravity Forms conditional logic rule. */
export type ConditionalLogicRule = {
	/** Target field Id. Field that will have it’s value compared with the value property to determine if this rule is a match. */
	fieldId?: Maybe<Scalars["Float"]["output"]>;
	/** Operator to be used when evaluating this rule. */
	operator?: Maybe<FormRuleOperatorEnum>;
	/** The value to compare with field specified by fieldId. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
	/** A list of edges (relational context) between connected nodes */
	edges: Array<Edge>;
	/** A list of connected nodes */
	nodes: Array<Node>;
	/** Information about pagination in a connection. */
	pageInfo: PageInfo;
};

/** A Gravity Forms consent field. */
export type ConsentField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithCheckboxLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithRulesSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Text of the consent checkbox. */
		checkboxLabel?: Maybe<Scalars["String"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** Consent field value. This is `true` when consent is given, `false` when it is not. */
		consentValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Nodes used to manage content */
export type ContentNode = {
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
	/** The name of the Content Type the node belongs to */
	contentTypeName: Scalars["String"]["output"];
	/** The ID of the node in the database. */
	databaseId: Scalars["Int"]["output"];
	/** Post publishing date. */
	date?: Maybe<Scalars["String"]["output"]>;
	/** The publishing date set in GMT. */
	dateGmt?: Maybe<Scalars["String"]["output"]>;
	/** The desired slug of the post */
	desiredSlug?: Maybe<Scalars["String"]["output"]>;
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
	/** The RSS enclosure for the object */
	enclosure?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: Maybe<Scalars["String"]["output"]>;
	/** The unique resource identifier path */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the object is a node in the preview state */
	isPreview?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The user that most recently edited the node */
	lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
	/** The permalink of the post */
	link?: Maybe<Scalars["String"]["output"]>;
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: Maybe<Scalars["String"]["output"]>;
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: Maybe<Scalars["String"]["output"]>;
	/** The database id of the preview node */
	previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Whether the object is a node in the preview state */
	previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: Maybe<Scalars["String"]["output"]>;
	/** The current status of the object */
	status?: Maybe<Scalars["String"]["output"]>;
	/** The template assigned to a node of content */
	template?: Maybe<ContentTemplate>;
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
	/** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
	edges: Array<ContentNodeConnectionEdge>;
	/** A list of connected ContentNode Nodes */
	nodes: Array<ContentNode>;
	/** Information about pagination in a connection. */
	pageInfo: ContentNodeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected ContentNode Node */
	node: ContentNode;
};

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type ContentNodeIdTypeEnum =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the URI. */
	| "URI";

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: ContentType;
	};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge &
	OneToOneConnection &
	UserConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: User;
	};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge &
	OneToOneConnection &
	UserConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The timestamp for when the node was last edited */
		lockTimestamp?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: User;
	};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection &
	EnqueuedScriptConnection & {
		/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
		edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedScript>;
		/** Information about pagination in a connection. */
		pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
	};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge &
	EnqueuedScriptConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedScript;
	};

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection &
	EnqueuedStylesheetConnection & {
		/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
		edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedStylesheet>;
		/** Information about pagination in a connection. */
		pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
	};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge &
	EnqueuedStylesheetConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedStylesheet;
	};

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo =
	EnqueuedStylesheetConnectionPageInfo &
		PageInfo &
		WpPageInfo & {
			/** When paginating forwards, the cursor to continue. */
			endCursor?: Maybe<Scalars["String"]["output"]>;
			/** When paginating forwards, are there more items? */
			hasNextPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, are there more items? */
			hasPreviousPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, the cursor to continue. */
			startCursor?: Maybe<Scalars["String"]["output"]>;
		};

/** The template assigned to a node of content */
export type ContentTemplate = {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** An Post Type object */
export type ContentType = Node &
	UniformResourceIdentifiable & {
		/** Whether this content type should can be exported. */
		canExport?: Maybe<Scalars["Boolean"]["output"]>;
		/** Connection between the ContentType type and the Taxonomy type */
		connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
		/** Connection between the ContentType type and the ContentNode type */
		contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
		/** Whether content of this type should be deleted when the author of it is deleted from the system. */
		deleteWithUser?: Maybe<Scalars["Boolean"]["output"]>;
		/** Description of the content type. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Whether to exclude nodes of this content type from front end search results. */
		excludeFromSearch?: Maybe<Scalars["Boolean"]["output"]>;
		/** The plural name of the content type within the GraphQL Schema. */
		graphqlPluralName?: Maybe<Scalars["String"]["output"]>;
		/** The singular name of the content type within the GraphQL Schema. */
		graphqlSingleName?: Maybe<Scalars["String"]["output"]>;
		/** Whether this content type should have archives. Content archives are generated by type and by date. */
		hasArchive?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the content type is hierarchical, for example pages. */
		hierarchical?: Maybe<Scalars["Boolean"]["output"]>;
		/** The globally unique identifier of the post-type object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars["Boolean"]["output"];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** Display name of the content type. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Details about the content type labels. */
		labels?: Maybe<PostTypeLabelDetails>;
		/** The name of the icon file to display as a menu icon. */
		menuIcon?: Maybe<Scalars["String"]["output"]>;
		/** The position of this post type in the menu. Only applies if show_in_menu is true. */
		menuPosition?: Maybe<Scalars["Int"]["output"]>;
		/** The internal name of the post type. This should not be used for display purposes. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
		public?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
		publiclyQueryable?: Maybe<Scalars["Boolean"]["output"]>;
		/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
		restBase?: Maybe<Scalars["String"]["output"]>;
		/** The REST Controller class assigned to handling this content type. */
		restControllerClass?: Maybe<Scalars["String"]["output"]>;
		/** Makes this content type available via the admin bar. */
		showInAdminBar?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether to add the content type to the GraphQL Schema. */
		showInGraphql?: Maybe<Scalars["Boolean"]["output"]>;
		/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
		showInMenu?: Maybe<Scalars["Boolean"]["output"]>;
		/** Makes this content type available for selection in navigation menus. */
		showInNavMenus?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
		showInRest?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether to generate and allow a UI for managing this content type in the admin. */
		showUi?: Maybe<Scalars["Boolean"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
	/** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
	edges: Array<ContentTypeConnectionEdge>;
	/** A list of connected ContentType Nodes */
	nodes: Array<ContentType>;
	/** Information about pagination in a connection. */
	pageInfo: ContentTypeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected ContentType Node */
	node: ContentType;
};

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Allowed Content Types */
export type ContentTypeEnum =
	/** The Type of Content object */
	| "AGENT"
	/** The Type of Content object */
	| "ATTACHMENT"
	/** The Type of Content object */
	| "PAGE"
	/** The Type of Content object */
	| "POST"
	/** The Type of Content object */
	| "PROPERTIE";

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export type ContentTypeIdTypeEnum =
	/** The globally unique ID */
	| "ID"
	/** The name of the content type. */
	| "NAME";

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the ContentTypeToContentNodeConnection connection */
		edges: Array<ContentTypeToContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: ContentTypeToContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection &
	TaxonomyConnection & {
		/** Edges for the ContentTypeToTaxonomyConnection connection */
		edges: Array<ContentTypeToTaxonomyConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Taxonomy>;
		/** Information about pagination in a connection. */
		pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
	};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge &
	TaxonomyConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Taxonomy;
	};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo &
	TaxonomyConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Allowed Content Types of the Category taxonomy. */
export type ContentTypesOfCategoryEnum =
	/** The Type of Content object */
	"POST";

/** Allowed Content Types of the PostFormat taxonomy. */
export type ContentTypesOfPostFormatEnum =
	/** The Type of Content object */
	"POST";

/** Allowed Content Types of the Tag taxonomy. */
export type ContentTypesOfTagEnum =
	/** The Type of Content object */
	"POST";

/** Input for the createAgent mutation. */
export type CreateAgentInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createAgent mutation. */
export type CreateAgentPayload = {
	/** The Post object mutation type. */
	agent?: Maybe<Agent>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the category object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The name of the category object to mutate */
	name: Scalars["String"]["input"];
	/** The ID of the category that should be set as the parent */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
	/** The created category */
	category?: Maybe<Category>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
	/** The approval status of the comment. */
	approved?: InputMaybe<Scalars["String"]["input"]>;
	/** The name of the comment's author. */
	author?: InputMaybe<Scalars["String"]["input"]>;
	/** The email of the comment's author. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** The url of the comment's author. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The database ID of the post object the comment belongs to. */
	commentOn?: InputMaybe<Scalars["Int"]["input"]>;
	/** Content of the comment. */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** Parent comment ID of current comment. */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** The approval status of the comment */
	status?: InputMaybe<CommentStatusEnum>;
	/** Type of comment. */
	type?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The comment that was created */
	comment?: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: InputMaybe<Scalars["String"]["input"]>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The caption for the mediaItem */
	caption?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the mediaItem */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the mediaItem */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: InputMaybe<Scalars["String"]["input"]>;
	/** Description of the mediaItem */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The file name of the mediaItem */
	filePath?: InputMaybe<Scalars["String"]["input"]>;
	/** The file type of the mediaItem */
	fileType?: InputMaybe<MimeTypeEnum>;
	/** The ID of the parent object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The ping status for the mediaItem */
	pingStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the mediaItem */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the mediaItem */
	status?: InputMaybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The MediaItem object mutation type. */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the object */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The content of the object */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the parent object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	page?: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the post_format object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The name of the post_format object to mutate */
	name: Scalars["String"]["input"];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The created post_format */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Set connections between the post and categories */
	categories?: InputMaybe<PostCategoriesInput>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the object */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The content of the object */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The excerpt of the object */
	excerpt?: InputMaybe<Scalars["String"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The ping status for the object */
	pingStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** URLs that have been pinged. */
	pinged?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Set connections between the post and postFormats */
	postFormats?: InputMaybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: InputMaybe<PostTagsInput>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
	/** URLs queued to be pinged. */
	toPing?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	post?: Maybe<Post>;
};

/** Input for the createPropertie mutation. */
export type CreatePropertieInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createPropertie mutation. */
export type CreatePropertiePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	propertie?: Maybe<Propertie>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the post_tag object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The name of the post_tag object to mutate */
	name: Scalars["String"]["input"];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The created post_tag */
	tag?: Maybe<Tag>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
	/** User's AOL IM account. */
	aim?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing content about the user. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing the user's email address. */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** 	The user's first name. */
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	/** User's Jabber account. */
	jabber?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's last name. */
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	/** User's locale. */
	locale?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains the plain text password for the user. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: InputMaybe<Scalars["String"]["input"]>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: InputMaybe<Scalars["String"]["input"]>;
	/** An array of roles to be assigned to the user. */
	roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** A string that contains the user's username for logging in. */
	username: Scalars["String"]["input"];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** User's Yahoo IM account. */
	yim?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The User object mutation type. */
	user?: Maybe<User>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
	/** The unique identifier stored in the database */
	databaseId: Scalars["Int"]["output"];
};

/** A Gravity Forms date field. */
export type DateField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDateFormatSetting &
	GfFieldWithDateInputTypeSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSubLabelPlacementSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines how the date field displays it’s calendar icon. */
		calendarIconType?: Maybe<FormFieldCalendarIconTypeEnum>;
		/** Contains the URL to the custom calendar icon. Only applicable when calendarIconType is set to custom. */
		calendarIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Determines how the date is displayed. */
		dateFormat?: Maybe<DateFieldFormatEnum>;
		/** The type of date field to display. */
		dateType?: Maybe<DateFieldTypeEnum>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** How the DateField date is displayed. */
export type DateFieldFormatEnum =
	/** dd/mm/yyyy format. */
	| "DMY"
	/** dd-mm-yyyy format. */
	| "DMY_DASH"
	/** dd.mm.yyyy format. */
	| "DMY_DOT"
	/** mm/dd/yyyy format. */
	| "MDY"
	/** yyyy/mm/dd format. */
	| "YMD_DASH"
	/** yyyy.mm.dd format. */
	| "YMD_DOT"
	/** yyyy/mm/dd format. */
	| "YMD_SLASH";

/** Type of date field to display. */
export type DateFieldTypeEnum =
	/** A date dropdown. */
	| "DROPDOWN"
	/** A simple date field. */
	| "FIELD"
	/** A datepicker. */
	| "PICKER";

/** Date values */
export type DateInput = {
	/** Day of the month (from 1 to 31) */
	day?: InputMaybe<Scalars["Int"]["input"]>;
	/** Month number (from 1 to 12) */
	month?: InputMaybe<Scalars["Int"]["input"]>;
	/** 4 digit year (e.g. 2017) */
	year?: InputMaybe<Scalars["Int"]["input"]>;
};

/** DateInputProperty input values. */
export type DateInputProperty = GfFieldInput &
	GfFieldInputWithDateFormatSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** Filter the connection based on input */
export type DateQueryInput = {
	/** Nodes should be returned after this date */
	after?: InputMaybe<DateInput>;
	/** Nodes should be returned before this date */
	before?: InputMaybe<DateInput>;
	/** Column to query against */
	column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
	/** For after/before, whether exact value should be matched or not */
	compare?: InputMaybe<Scalars["String"]["input"]>;
	/** Day of the month (from 1 to 31) */
	day?: InputMaybe<Scalars["Int"]["input"]>;
	/** Hour (from 0 to 23) */
	hour?: InputMaybe<Scalars["Int"]["input"]>;
	/** For after/before, whether exact value should be matched or not */
	inclusive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Minute (from 0 to 59) */
	minute?: InputMaybe<Scalars["Int"]["input"]>;
	/** Month number (from 1 to 12) */
	month?: InputMaybe<Scalars["Int"]["input"]>;
	/** OR or AND, how the sub-arrays should be compared */
	relation?: InputMaybe<RelationEnum>;
	/** Second (0 to 59) */
	second?: InputMaybe<Scalars["Int"]["input"]>;
	/** Week of the year (from 0 to 53) */
	week?: InputMaybe<Scalars["Int"]["input"]>;
	/** 4 digit year (e.g. 2017) */
	year?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the deleteAgent mutation. */
export type DeleteAgentInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The ID of the agent to delete */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the deleteAgent mutation. */
export type DeleteAgentPayload = {
	/** The object before it was deleted */
	agent?: Maybe<Agent>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the category to delete */
	id: Scalars["ID"]["input"];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
	/** The deleted term object */
	category?: Maybe<Category>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The deleted comment ID */
	id: Scalars["ID"]["input"];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The deleted comment object */
	comment?: Maybe<Comment>;
	/** The deleted comment ID */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
};

/** Input for the deleteGfDraftEntry mutation. */
export type DeleteGfDraftEntryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Either the global ID of the draft entry, or its resume token. */
	id: Scalars["ID"]["input"];
	/** The ID type for the draft entry. Defaults to `ID` . */
	idType?: InputMaybe<DraftEntryIdTypeEnum>;
};

/** The payload for the deleteGfDraftEntry mutation. */
export type DeleteGfDraftEntryPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The global ID of the draft entry that was deleted. */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The draft entry object before it was deleted. */
	draftEntry?: Maybe<GfDraftEntry>;
};

/** Input for the deleteGfEntry mutation. */
export type DeleteGfEntryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the entry should be force deleted instead of being moved to the trash. */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** ID of the entry to delete, either a global or database ID. */
	id: Scalars["ID"]["input"];
};

/** The payload for the deleteGfEntry mutation. */
export type DeleteGfEntryPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The global ID of the draft entry that was deleted. */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The entry object before it was deleted. */
	entry?: Maybe<GfSubmittedEntry>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The ID of the mediaItem to delete */
	id: Scalars["ID"]["input"];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted mediaItem */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The mediaItem before it was deleted */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The ID of the page to delete */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The object before it was deleted */
	page?: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the postFormat to delete */
	id: Scalars["ID"]["input"];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The deleted term object */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The ID of the post to delete */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The object before it was deleted */
	post?: Maybe<Post>;
};

/** Input for the deletePropertie mutation. */
export type DeletePropertieInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The ID of the propertie to delete */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the deletePropertie mutation. */
export type DeletePropertiePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The object before it was deleted */
	propertie?: Maybe<Propertie>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the tag to delete */
	id: Scalars["ID"]["input"];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the deleted object */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The deleted term object */
	tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the user you want to delete */
	id: Scalars["ID"]["input"];
	/** Reassign posts and links to new User ID. */
	reassignId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the user that you just deleted */
	deletedId?: Maybe<Scalars["ID"]["output"]>;
	/** The deleted user object */
	user?: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = {
	/** Allow people to submit comments on new posts. */
	defaultCommentStatus?: Maybe<Scalars["String"]["output"]>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. */
export type DraftEntryIdTypeEnum =
	/** Unique global ID for the object. */
	| "ID"
	/** The resume token assigned by Gravity Forms. Used by draft entries. */
	| "RESUME_TOKEN";

/** Relational context between connected nodes */
export type Edge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected node */
	node: Node;
};

/** A Gravity Forms email field. */
export type EmailField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	GfFieldWithSubLabelPlacementSetting &
	GfGfFieldWithEmailConfirmationSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines whether the Confirm Email field is active. */
		hasEmailConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Input fields for email field. */
export type EmailFieldInput = {
	/** Email confirmation input value. Only used when email confirmation is enabled. */
	confirmationValue?: InputMaybe<Scalars["String"]["input"]>;
	/** Email input value. */
	value?: InputMaybe<Scalars["String"]["input"]>;
};

/** EmailInputProperty input values. */
export type EmailInputProperty = GfFieldInput &
	GfFieldInputWithEmailConfirmationSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
	/** The inline code to be run after the asset is loaded. */
	after?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/**
	 * Deprecated
	 * @deprecated Use `EnqueuedAsset.media` instead.
	 */
	args?: Maybe<Scalars["Boolean"]["output"]>;
	/** The inline code to be run before the asset is loaded. */
	before?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
	conditional?: Maybe<Scalars["String"]["output"]>;
	/** Dependencies needed to use this asset */
	dependencies?: Maybe<Array<Maybe<EnqueuedAsset>>>;
	/**
	 * Extra information needed for the script
	 * @deprecated Use `EnqueuedScript.extraData` instead.
	 */
	extra?: Maybe<Scalars["String"]["output"]>;
	/** The handle of the enqueued asset */
	handle?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the enqueued asset */
	id: Scalars["ID"]["output"];
	/** The source of the asset */
	src?: Maybe<Scalars["String"]["output"]>;
	/** The version of the enqueued asset */
	version?: Maybe<Scalars["String"]["output"]>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset &
	Node & {
		/** The inline code to be run after the asset is loaded. */
		after?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/**
		 * Deprecated
		 * @deprecated Use `EnqueuedAsset.media` instead.
		 */
		args?: Maybe<Scalars["Boolean"]["output"]>;
		/** The inline code to be run before the asset is loaded. */
		before?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
		conditional?: Maybe<Scalars["String"]["output"]>;
		/** Dependencies needed to use this asset */
		dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
		/**
		 * Extra information needed for the script
		 * @deprecated Use `EnqueuedScript.extraData` instead.
		 */
		extra?: Maybe<Scalars["String"]["output"]>;
		/** Extra data supplied to the enqueued script */
		extraData?: Maybe<Scalars["String"]["output"]>;
		/** The handle of the enqueued asset */
		handle?: Maybe<Scalars["String"]["output"]>;
		/** The global ID of the enqueued script */
		id: Scalars["ID"]["output"];
		/** The source of the asset */
		src?: Maybe<Scalars["String"]["output"]>;
		/** The loading strategy to use on the script tag */
		strategy?: Maybe<ScriptLoadingStrategyEnum>;
		/** The version of the enqueued script */
		version?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
	/** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
	edges: Array<EnqueuedScriptConnectionEdge>;
	/** A list of connected EnqueuedScript Nodes */
	nodes: Array<EnqueuedScript>;
	/** Information about pagination in a connection. */
	pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected EnqueuedScript Node */
	node: EnqueuedScript;
};

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset &
	Node & {
		/** The inline code to be run after the asset is loaded. */
		after?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/**
		 * Deprecated
		 * @deprecated Use `EnqueuedAsset.media` instead.
		 */
		args?: Maybe<Scalars["Boolean"]["output"]>;
		/** The inline code to be run before the asset is loaded. */
		before?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
		conditional?: Maybe<Scalars["String"]["output"]>;
		/** Dependencies needed to use this asset */
		dependencies?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
		/**
		 * Extra information needed for the script
		 * @deprecated Use `EnqueuedScript.extraData` instead.
		 */
		extra?: Maybe<Scalars["String"]["output"]>;
		/** The handle of the enqueued asset */
		handle?: Maybe<Scalars["String"]["output"]>;
		/** The global ID of the enqueued stylesheet */
		id: Scalars["ID"]["output"];
		/** Whether the enqueued style is RTL or not */
		isRtl?: Maybe<Scalars["Boolean"]["output"]>;
		/** The media attribute to use for the link */
		media?: Maybe<Scalars["String"]["output"]>;
		/** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
		path?: Maybe<Scalars["String"]["output"]>;
		/** The `rel` attribute to use for the link */
		rel?: Maybe<Scalars["String"]["output"]>;
		/** The source of the asset */
		src?: Maybe<Scalars["String"]["output"]>;
		/** Optional suffix, used in combination with RTL */
		suffix?: Maybe<Scalars["String"]["output"]>;
		/** The title of the enqueued style. Used for preferred/alternate stylesheets. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The version of the enqueued style */
		version?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
	/** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
	edges: Array<EnqueuedStylesheetConnectionEdge>;
	/** A list of connected EnqueuedStylesheet Nodes */
	nodes: Array<EnqueuedStylesheet>;
	/** Information about pagination in a connection. */
	pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected EnqueuedStylesheet Node */
	node: EnqueuedStylesheet;
};

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Options for ordering the connection. */
export type EntriesConnectionOrderbyInput = {
	/** The field name used to sort the results. */
	field?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the sorting field's values are numeric. */
	isNumeric?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The cardinality of the order of the connection. */
	order?: InputMaybe<OrderEnum>;
};

/** Date Filters input fields for Entries queries. */
export type EntriesDateFiltersInput = {
	/** End date in Y-m-d H:i:s format. */
	endDate?: InputMaybe<Scalars["String"]["input"]>;
	/** Start date in Y-m-d H:i:s format. */
	startDate?: InputMaybe<Scalars["String"]["input"]>;
};

/** Field Filters input fields for Entries queries. */
export type EntriesFieldFiltersInput = {
	/** The field value(s) to filter by. Must be boolean values. If using this field, do not also use stringValues, intValues or floatValues. */
	boolValues?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	/** The field value(s) to filter by. Must be float values. If using this field, do not also use stringValues, intValues or boolValues. */
	floatValues?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** The field value(s) to filter by. Must be integer values. If using this field, do not also use stringValues, floatValues or boolValues. */
	intValues?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** Optional. The entry meta key to filter by. You can use the ID of the form field, or the names of any of the columns in Gravity Form's database table for entries, such as "date_created", "is_read, "created_by", etc. If omitted, the value will be checked against all meta keys. . */
	key?: InputMaybe<Scalars["String"]["input"]>;
	/** The operator to use for filtering. */
	operator?: InputMaybe<FieldFiltersOperatorEnum>;
	/** The field value(s) to filter by. Must be string values. If using this field, do not also use intValues, floatValues or boolValues. */
	stringValues?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** The Type of Identifier used to fetch a single resource. */
export type EntryIdTypeEnum =
	/** The database ID assigned by Gravity Forms. Used by submitted entries. */
	| "DATABASE_ID"
	/** Unique global ID for the object. */
	| "ID"
	/** The resume token assigned by Gravity Forms. Used by draft entries. */
	| "RESUME_TOKEN";

/** Status of entries to get. Default is ACTIVE. */
export type EntryStatusEnum =
	/** Active entries (default). */
	| "ACTIVE"
	/** All entries. */
	| "ALL"
	/** Spam entries. */
	| "SPAM"
	/** Entries in the trash. */
	| "TRASH";

/** The type of Gravity Forms entry. */
export type EntryTypeEnum =
	/** A Gravity Forms draft entry. */
	| "DRAFT"
	/** A Gravity Forms partial entry. */
	| "PARTIAL"
	/** A submitted Gravity Forms entry. */
	| "SUBMITTED";

/** Field error. */
export type FieldError = {
	/** The field with the associated error message. */
	id?: Maybe<Scalars["Float"]["output"]>;
	/** Error message. */
	message?: Maybe<Scalars["String"]["output"]>;
};

/** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
export type FieldFiltersModeEnum =
	/** All field filters (default). */
	| "ALL"
	/** Any field filters. */
	| "ANY";

/** The operator to use for filtering. */
export type FieldFiltersOperatorEnum =
	/** Find field values that contain the passed value. Only one value may be passed when using this operator. SQL Equivalent: `LIKE %value%`. */
	| "CONTAINS"
	/** Default. Find field values that are equal to one of the values in the passed array. Default. */
	| "IN"
	/** Find field values that are an exact match for the passed value. Only one value may be passed when using this operator. SQL Equivalent: `=`. */
	| "IS"
	/** Find field values that are NOT an exact match for the passed value. Only one value may be passed when using this operator. SQL Equivalent: `NOT`. */
	| "IS_NOT"
	/** Find field values that are an exact match for the passed value. SQL wildcards are supported. Only one value may be passed when using this operator. SQL Equivalent: `LIKE`. */
	| "LIKE"
	/** Find field values that do NOT match those in the values array. */
	| "NOT_IN";

/** A Gravity Forms fileupload field. */
export type FileUploadField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithFileExtensionsSetting &
	GfFieldWithFileSizeSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMultipleFilesSetting &
	GfFieldWithPersonalData &
	GfFieldWithRulesSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** A comma-delimited list of the file extensions which may be uploaded. */
		allowedExtensions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Indicates whether multiple files may be uploaded. */
		canAcceptMultipleFiles?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** File upload value */
		fileUploadValues?: Maybe<Array<Maybe<FileUploadFieldValue>>>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The maximum size (in MB) an uploaded file may be . */
		maxFileSize?: Maybe<Scalars["Int"]["output"]>;
		/** When the field is set to allow multiple files to be uploaded, this property is available to set a limit on how many may be uploaded. */
		maxFiles?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/**
		 * An array of field values.
		 * @deprecated Use `fileUploadValues` instead.
		 */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The individual file properties from an uploaded file. */
export type FileUploadFieldValue = {
	/** The path to the parent directory of the file. */
	basePath?: Maybe<Scalars["String"]["output"]>;
	/** The base url to the parent directory of the file. */
	baseUrl?: Maybe<Scalars["String"]["output"]>;
	/** The filename. */
	filename?: Maybe<Scalars["String"]["output"]>;
	/** The url to the file. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** Gravity Forms button. */
export type FormButton = {
	/** Controls when the form button should be visible based on values selected on the form. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** Contains the URL for the image button. Only applicable when type is set to image. */
	imageUrl?: Maybe<Scalars["String"]["output"]>;
	/** Contains the button text. Only applicable when type is set to text. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** Specifies the type of button to be displayed. Defaults to TEXT. */
	type?: Maybe<FormButtonTypeEnum>;
};

/** Type of button to be displayed. Default is TEXT. */
export type FormButtonTypeEnum =
	/** Image button. */
	| "IMAGE"
	/** Text button (default). */
	| "TEXT";

/** Properties for all the email notifications which exist for a form. */
export type FormConfirmation = {
	/** Controls which form confirmation message should be displayed. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** ID. */
	id?: Maybe<Scalars["String"]["output"]>;
	/** Whether the confirmation is active or inactive. The default confirmation is always active. */
	isActive?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the confirmation message should be formatted so that paragraphs are automatically added for new lines. */
	isAutoformatted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is the default confirmation. */
	isDefault?: Maybe<Scalars["Boolean"]["output"]>;
	/** Contains the confirmation message that will be displayed. Only applicable when type is set to &quot;MESSAGE&quot;. */
	message?: Maybe<Scalars["String"]["output"]>;
	/** The confirmation name. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the FormConfirmation type and the Page type */
	page?: Maybe<FormConfirmationToPageConnectionEdge>;
	/** Contains the Id of the WordPress page that the browser will be redirected to. Only applicable when type is set to `PAGE`. */
	pageId?: Maybe<Scalars["Int"]["output"]>;
	/** Contains the query string to be appended to the redirection url. Only applicable when type is set to `REDIRECT`. */
	queryString?: Maybe<Scalars["String"]["output"]>;
	/** Determines the type of confirmation to be used. */
	type?: Maybe<FormConfirmationTypeEnum>;
	/** Contains the URL that the browser will be redirected to. Only applicable when type is set to `REDIRECT`. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the FormConfirmation type and the Page type */
export type FormConfirmationToPageConnectionEdge = Edge &
	OneToOneConnection &
	PageConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Page;
	};

/** Type of form confirmation to be used. */
export type FormConfirmationTypeEnum =
	/** Use a confirmation "message". */
	| "MESSAGE"
	/** Use a redirect to a different WordPress "page". */
	| "PAGE"
	/** Use a "redirect" to a given URL. */
	| "REDIRECT";

/** The policies governing which entry data to include when erasing and exporting personal data. */
export type FormDataPolicies = {
	/** Whether entry data from this form is included when erasing and exporting personal data. */
	canExportAndErase?: Maybe<Scalars["Boolean"]["output"]>;
	/** The individual entry data exporting and erasing policies. */
	entryData?: Maybe<Array<Maybe<FormEntryDataPolicy>>>;
	/** The database ID of the Gravity Forms field used to identify the user. */
	identificationFieldDatabaseId?: Maybe<Scalars["Int"]["output"]>;
};

/** Determines where the field description is displayed relative to the field. */
export type FormDescriptionPlacementEnum =
	/** The field description is displayed above the field input (i.e. immediately after the field label). */
	| "ABOVE"
	/** The field description is displayed below the field input. */
	| "BELOW";

/** The individual entry data exporting and erasing policies. */
export type FormEntryDataPolicy = {
	/** The array key for the Gravity Forms Entry. */
	key?: Maybe<Scalars["String"]["output"]>;
	/** Whether this field should be included when erasing personal data. */
	shouldErase?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this field should be included when exporting personal data. */
	shouldExport?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Gravity Forms form entry limititation details. */
export type FormEntryLimits = {
	/** Whether the form has a limit on the number of submissions. */
	hasLimit?: Maybe<Scalars["Boolean"]["output"]>;
	/** Message that will be displayed when the maximum number of submissions have been reached. */
	limitReachedMessage?: Maybe<Scalars["String"]["output"]>;
	/** The time period during which submissions are allowed. */
	limitationPeriod?: Maybe<FormLimitEntriesPeriodEnum>;
	/** The number of submissions allowed. */
	maxEntries?: Maybe<Scalars["Int"]["output"]>;
};

/** Gravity Forms field. */
export type FormField = {
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** How the date field displays its calendar icon. */
export type FormFieldCalendarIconTypeEnum =
	/** Default calendar icon. */
	| "CALENDAR"
	/** Custom calendar icon. */
	| "CUSTOM"
	/** No calendar icon. */
	| "NONE";

/** Connection to FormField Nodes */
export type FormFieldConnection = {
	/** A list of edges (relational context) between GfEntry and connected FormField Nodes */
	edges: Array<FormFieldConnectionEdge>;
	/** A list of connected FormField Nodes */
	nodes: Array<FormField>;
	pageInfo: FormFieldConnectionPageInfo;
};

/** Edge between a Node and a connected FormField */
export type FormFieldConnectionEdge = {
	/** The connected FormField Node */
	node: FormField;
};

/** Page Info on the connected FormFieldConnectionEdge */
export type FormFieldConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The form field-specifc policies for exporting and erasing personal data. */
export type FormFieldDataPolicy = {
	/** Whether this field is used to identify the user&#039;s personal data. */
	isIdentificationField?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this field should be included when erasing personal data. */
	shouldErase?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this field should be included when exporting personal data. */
	shouldExport?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Determines where the field description is displayed relative to the field. */
export type FormFieldDescriptionPlacementEnum =
	/** The field description is displayed above the field input (i.e. immediately after the field label). */
	| "ABOVE"
	/** The field description is displayed below the field input. */
	| "BELOW"
	/** The field description is inherited from the form default settings. */
	| "INHERIT";

/** The field label position. Empty when using the form defaults or a value of "hidden_label". */
export type FormFieldLabelPlacementEnum =
	/** Field label is hidden. */
	| "HIDDEN"
	/** Field label is inherited from the form defaults. */
	| "INHERIT"
	/** Field label is displayed beside the fields and aligned to the left. */
	| "LEFT"
	/** Field label is displayed beside the fields and aligned to the right. */
	| "RIGHT"
	/** Field label is displayed on top of the fields. */
	| "TOP";

/** Type of indicator to use when field is required. */
export type FormFieldRequiredIndicatorEnum =
	/** Asterisk (*) indicator. */
	| "ASTERISK"
	/** Custom indicator. */
	| "CUSTOM"
	/** Text (Required) indicator (default). */
	| "TEXT";

/** The size of the field when displayed on the page. */
export type FormFieldSizeEnum =
	/** Large field size. */
	| "LARGE"
	/** Medium field size. */
	| "MEDIUM"
	/** Small field size. */
	| "SMALL";

/** Determines how sub-labels are aligned. */
export type FormFieldSubLabelPlacementEnum =
	/** The sub-label is displayed above the sub-field input (i.e. immediately after the field label). */
	| "ABOVE"
	/** The sub-label is displayed below the sub-field input. */
	| "BELOW"
	/** Field label is inherited from the form defaults. */
	| "INHERIT";

/** Gravity Forms Field Type. */
export type FormFieldTypeEnum =
	/** A Gravity Forms address field. */
	| "ADDRESS"
	/** A Gravity Forms calculation field. */
	| "CALCULATION"
	/** A Gravity Forms captcha field. */
	| "CAPTCHA"
	/** A Gravity Forms checkbox field. */
	| "CHECKBOX"
	/** A Gravity Forms consent field. */
	| "CONSENT"
	/** A Gravity Forms date field. */
	| "DATE"
	/** A Gravity Forms email field. */
	| "EMAIL"
	/** A Gravity Forms fileupload field. */
	| "FILEUPLOAD"
	/** A Gravity Forms hidden field. */
	| "HIDDEN"
	/** A Gravity Forms hiddenproduct field. */
	| "HIDDENPRODUCT"
	/** A Gravity Forms html field. */
	| "HTML"
	/** A Gravity Forms list field. */
	| "LIST"
	/** A Gravity Forms multiselect field. */
	| "MULTISELECT"
	/** A Gravity Forms name field. */
	| "NAME"
	/** A Gravity Forms number field. */
	| "NUMBER"
	/** A Gravity Forms option field. */
	| "OPTION"
	/** A Gravity Forms page field. */
	| "PAGE"
	/** A Gravity Forms password field. */
	| "PASSWORD"
	/** A Gravity Forms phone field. */
	| "PHONE"
	/** A Gravity Forms post_category field. */
	| "POST_CATEGORY"
	/** A Gravity Forms post_content field. */
	| "POST_CONTENT"
	/** A Gravity Forms post_custom_field field. */
	| "POST_CUSTOM_FIELD"
	/** A Gravity Forms post_excerpt field. */
	| "POST_EXCERPT"
	/** A Gravity Forms post_image field. */
	| "POST_IMAGE"
	/** A Gravity Forms post_tags field. */
	| "POST_TAGS"
	/** A Gravity Forms post_title field. */
	| "POST_TITLE"
	/** A Gravity Forms price field. */
	| "PRICE"
	/** A Gravity Forms product field. */
	| "PRODUCT"
	/** A Gravity Forms quantity field. */
	| "QUANTITY"
	/** A Gravity Forms radio field. */
	| "RADIO"
	/** A Gravity Forms section field. */
	| "SECTION"
	/** A Gravity Forms select field. */
	| "SELECT"
	/** A Gravity Forms shipping field. */
	| "SHIPPING"
	/** A Gravity Forms singleproduct field. */
	| "SINGLEPRODUCT"
	/** A Gravity Forms singleshipping field. */
	| "SINGLESHIPPING"
	/** A Gravity Forms text field. */
	| "TEXT"
	/** A Gravity Forms textarea field. */
	| "TEXTAREA"
	/** A Gravity Forms time field. */
	| "TIME"
	/** A Gravity Forms total field. */
	| "TOTAL"
	/** A Gravity Forms website field. */
	| "WEBSITE";

/** Field values input. Includes a field id, and a valid value Input. */
export type FormFieldValuesInput = {
	/** The form field values for Address fields. */
	addressValues?: InputMaybe<AddressFieldInput>;
	/** The form field values for Checkbox fields. */
	checkboxValues?: InputMaybe<Array<InputMaybe<CheckboxFieldInput>>>;
	/** The form field values for Email fields. */
	emailValues?: InputMaybe<EmailFieldInput>;
	/** The field id. */
	id: Scalars["Int"]["input"];
	/** The form field values for List fields. */
	listValues?: InputMaybe<Array<InputMaybe<ListFieldInput>>>;
	/** The form field values for Name fields. */
	nameValues?: InputMaybe<NameFieldInput>;
	/** The form field values for Name fields. */
	productValues?: InputMaybe<ProductFieldInput>;
	/** The form field values for basic fields. */
	value?: InputMaybe<Scalars["String"]["input"]>;
	/** The form field values for fields that accept multiple string values. Used by MultiSelect, Post Category, Post Custom, and Post Tags fields. */
	values?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Field visibility. */
export type FormFieldVisibilityEnum =
	/** The field is for "administrative" use. */
	| "ADMINISTRATIVE"
	/** The field is "hidden". */
	| "HIDDEN"
	/** The field is "visible". */
	| "VISIBLE";

/** The Type of Identifier used to fetch a single resource. */
export type FormIdTypeEnum =
	/** The database ID assigned by Gravity Forms. */
	| "DATABASE_ID"
	/** Unique global ID for the object. */
	| "ID";

/** Determines where the field labels should be placed in relation to the field. */
export type FormLabelPlacementEnum =
	/** Field labels are displayed beside the fields and aligned to the left. */
	| "LEFT"
	/** Field labels are displayed beside the fields and aligned to the right. */
	| "RIGHT"
	/** Field labels are displayed on top of the fields. */
	| "TOP";

/** Gravity Forms button. */
export type FormLastPageButton = {
	/** Contains the URL for the image button. Only applicable when type is set to image. */
	imageUrl?: Maybe<Scalars["String"]["output"]>;
	/** Contains the button text. Only applicable when type is set to text. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** Specifies the type of button to be displayed. Defaults to TEXT. */
	type?: Maybe<FormButtonTypeEnum>;
};

/** When limitEntries is set to 1, this property specifies the time period during which submissions are allowed. */
export type FormLimitEntriesPeriodEnum =
	/** Limit entries by "day". */
	| "DAY"
	/** Limit entries by "month". */
	| "MONTH"
	/** Limit entries by "week". */
	| "WEEK"
	/** Limit entries by "year". */
	| "YEAR";

/** Gravity Forms form login requirements data. */
export type FormLogin = {
	/** Whether the form is configured to be displayed only to logged in users. */
	isLoginRequired?: Maybe<Scalars["Boolean"]["output"]>;
	/** When `isLoginRequired` is set to true, this controls the message displayed when non-logged in user tries to access the form. */
	loginRequiredMessage?: Maybe<Scalars["String"]["output"]>;
};

/** Properties for all the email notifications which exist for a form. */
export type FormNotification = {
	/** The email or merge tags to be used as the email bcc address. */
	bcc?: Maybe<Scalars["String"]["output"]>;
	/** An associative array containing the conditional logic rules. See the Conditional Logic Object for more details. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** The notification event. Default is form_submission. */
	event?: Maybe<Scalars["String"]["output"]>;
	/** The email or merge tag to be used as the email from address. */
	from?: Maybe<Scalars["String"]["output"]>;
	/** The text or merge tag to be used as the email from name. */
	fromName?: Maybe<Scalars["String"]["output"]>;
	/** The notification ID. A 13 character unique ID. */
	id?: Maybe<Scalars["String"]["output"]>;
	/** Is the notification active or inactive. The default is true (active). */
	isActive?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the email message should be formatted so that paragraphs are automatically added for new lines. */
	isAutoformatted?: Maybe<Scalars["Boolean"]["output"]>;
	/** The email body/content. Merge tags supported. */
	message?: Maybe<Scalars["String"]["output"]>;
	/** The notification name. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The email or merge tags to be used as the email reply to address. */
	replyTo?: Maybe<Scalars["String"]["output"]>;
	/** Routing rules. */
	routing?: Maybe<Array<Maybe<FormNotificationRouting>>>;
	/** The name of the service to be used when sending this notification. Default is wordpress. */
	service?: Maybe<Scalars["String"]["output"]>;
	/** Determines if files uploaded on the form should be included when the notification is sent. */
	shouldSendAttachments?: Maybe<Scalars["Boolean"]["output"]>;
	/** The email subject line. Merge tags supported. */
	subject?: Maybe<Scalars["String"]["output"]>;
	/** The ID of an email field, an email address or merge tag to be used as the email to address. */
	to?: Maybe<Scalars["String"]["output"]>;
	/** Identifies what to use for the notification &quot;to&quot;. */
	toType?: Maybe<FormNotificationToTypeEnum>;
};

/** Properties for all the email notifications which exist for a form. */
export type FormNotificationRouting = {
	/** The email or merge tag to be used as the email To address if this rule is a match. */
	email?: Maybe<Scalars["String"]["output"]>;
	/** Target field ID. The field that will have it’s value compared with the value property to determine if this rule is a match. */
	fieldId?: Maybe<Scalars["Int"]["output"]>;
	/** Operator to be used when evaluating this rule. */
	operator?: Maybe<FormRuleOperatorEnum>;
	/** The value to compare with the field specified by fieldId. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** What to use for the notification "to". */
export type FormNotificationToTypeEnum =
	/** Email address. */
	| "EMAIL"
	/** Form field. */
	| "FIELD"
	/** Hidden. */
	| "HIDDEN"
	/** Routing using conditional rules. */
	| "ROUTING";

/** Style of progress bar. */
export type FormPageProgressStyleEnum =
	/** Blue progress bar style. */
	| "BLUE"
	/** Custom progress bar style. */
	| "CUSTOM"
	/** Green progress bar style. */
	| "GREEN"
	/** Grey progress bar style. */
	| "GREY"
	/** Orange progress bar style. */
	| "ORANGE"
	/** Red progress bar style. */
	| "RED";

/** Type of page progress indicator to be displayed. */
export type FormPageProgressTypeEnum =
	/** Don't show a page progress indicator. */
	| "NONE"
	/** Show page progress indicator as a percentage. */
	| "PERCENTAGE"
	/** Show page progress indicator as steps. */
	| "STEPS";

/** Gravity Forms form pagination data. */
export type FormPagination = {
	/** Progress bar background color. Can be any CSS color value. Only applies when `style` is set to &quot;CUSTOM&quot;. */
	backgroundColor?: Maybe<Scalars["String"]["output"]>;
	/** Progress bar text color. Can be any CSS color value. Only applies when `style` is set to &quot;CUSTOM&quot;. */
	color?: Maybe<Scalars["String"]["output"]>;
	/** Whether the confirmation bar should be displayed with the confirmation text. */
	hasProgressbarOnConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
	/** Last page button data. */
	lastPageButton?: Maybe<FormLastPageButton>;
	/** Names of the form&#039;s pages. */
	pageNames?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** The confirmation text to display once the end of the progress bar has been reached. Only applies when `hasProgressbarOnConfirmation` is set to true. */
	progressbarCompletionText?: Maybe<Scalars["String"]["output"]>;
	/** Style of progress bar. */
	style?: Maybe<FormPageProgressStyleEnum>;
	/** Type of progress indicator. */
	type?: Maybe<FormPageProgressTypeEnum>;
};

/** Gravity Forms form Personal Data settings. */
export type FormPersonalData = {
	/** The policies governing which entry data to include when erasing and exporting personal data. */
	dataPolicies?: Maybe<FormDataPolicies>;
	/** The number of days to retain entries. `null` if `retentionPolicy` is set to `RETAIN` entries indefinitely. */
	daysToRetain?: Maybe<Scalars["Int"]["output"]>;
	/** The policy for retaining old entry data. */
	retentionPolicy?: Maybe<FormRetentionPolicyEnum>;
	/** Whether the IP address should be saved to the form submission. */
	shouldSaveIP?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Gravity Forms form entry limititation details. */
export type FormPostCreation = {
	/** When `useCurrentUserAsAuthor` is `false`, this contains the User object for the author. */
	author?: Maybe<User>;
	/** When `useCurrentUserAsAuthor` is `false`, this property contains the user database that will be used as the Post author. */
	authorDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** When `useCurrentUserAsAuthor` is `false`, this property contains the user ID that will be used as the Post author. */
	authorId?: Maybe<Scalars["ID"]["output"]>;
	/** Form forms with Post fields, but without a Post Category field, this property contains the default category database ID the post will be associated with when created. */
	categoryDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Template to be used when creating the post content. Field variables (i.e. {Name:3} ) can be added to the template to insert user submitted values into the post content. Only applicable when `hasContentTemplate` is `true`. */
	contentTemplate?: Maybe<Scalars["String"]["output"]>;
	/** Determines the format that the Post should be created with. */
	format?: Maybe<PostFormatTypeEnum>;
	/** Determines if the post template functionality is enabled. When enabled, the post content will be created based on the template specified by `contentTemplate`. */
	hasContentTemplate?: Maybe<Scalars["Boolean"]["output"]>;
	/** Determines if the post title template functionality is enabled. When enabled, the post title will be created based on the template specified by `titleTemplate`. */
	hasTitleTemplate?: Maybe<Scalars["Boolean"]["output"]>;
	/** For forms with Post fields, this determines if the post should be created using the current logged in user as the author. */
	shouldUseCurrentUserAsAuthor?: Maybe<Scalars["Boolean"]["output"]>;
	/** For forms with Post fields, determines the status that the Post should be created with. */
	status?: Maybe<Scalars["String"]["output"]>;
	/** Template to be used when creating the post title. Field variables (i.e. {Name:3} ) can be added to the template to insert user submitted values into the post title. Only applicable when `hasTitleTemplate` is `true`. */
	titleTemplate?: Maybe<Scalars["String"]["output"]>;
};

/** The Personal Data retention policy. */
export type FormRetentionPolicyEnum =
	/** Entries will be deleted automatically after a specified number of days. */
	| "DELETE"
	/** Entries will be retain indefinitely. */
	| "RETAIN"
	/** Entries will be trashed automatically after a specified number of days. */
	| "TRASH";

/** Operator to be used when evaluating logic rules. */
export type FormRuleOperatorEnum =
	/** Evaluates values that CONTAIN the comparison value. */
	| "CONTAINS"
	/** Evaluates values that END with the comparison value. */
	| "ENDS_WITH"
	/** Evaluates values that are GREATER than the comparison value. */
	| "GREATER_THAN"
	/** Evaluates values that match the comparison value. */
	| "IS"
	/** Evaluates values that do NOT match the comparison value. */
	| "IS_NOT"
	/** Evaluates values that are LESS than the comparison value. */
	| "LESS_THAN"
	/** Evaluates values that START with the comparison value. */
	| "STARTS_WITH";

/** Gravity Forms form Save and Continue data. */
export type FormSaveAndContinue = {
	/** Contains the save button text. */
	buttonText?: Maybe<Scalars["String"]["output"]>;
	/** Whether the Save And Continue feature is enabled. */
	hasSaveAndContinue?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Gravity Forms form scheduling data. */
export type FormSchedule = {
	/** Message to be displayed when form is no longer available. */
	closedMessage?: Maybe<Scalars["String"]["output"]>;
	/** The Date/time details when the form will become inactive. */
	endDetails?: Maybe<FormScheduleDetails>;
	/** Specifies if this form is scheduled to be displayed only during a certain configured date/time. */
	hasSchedule?: Maybe<Scalars["Boolean"]["output"]>;
	/** Message to be displayed when form is not yet available. */
	pendingMessage?: Maybe<Scalars["String"]["output"]>;
	/** The Date/time details when the form will become active/visible. */
	startDetails?: Maybe<FormScheduleDetails>;
};

/** Gravity Forms form scheduling data. */
export type FormScheduleDetails = {
	/** Whether the date is in the AM or PM of a 12-hour clock. */
	amPm?: Maybe<AmPmEnum>;
	/** The schedule date in local time. */
	date?: Maybe<Scalars["String"]["output"]>;
	/** The schedule date in GMT. */
	dateGmt?: Maybe<Scalars["String"]["output"]>;
	/** The hour (1-12). */
	hour?: Maybe<Scalars["Int"]["output"]>;
	/** The minute. */
	minute?: Maybe<Scalars["Int"]["output"]>;
};

/** Status of forms to get. Default is ACTIVE. */
export type FormStatusEnum =
	/** Active forms (default). */
	| "ACTIVE"
	/** Inactive forms. */
	| "INACTIVE"
	/** Inactive forms in the trash. */
	| "INACTIVE_TRASHED"
	/** Active forms in the trash. */
	| "TRASHED";

/** Determines how sub-labels are aligned. */
export type FormSubLabelPlacementEnum =
	/** The sub-label is displayed above the sub-field input (i.e. immediately after the field label). */
	| "ABOVE"
	/** The sub-label is displayed below the sub-field input. */
	| "BELOW";

/** Gravity Forms submit button. */
export type FormSubmitButton = {
	/** Controls when the form button should be visible based on values selected on the form. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** Contains the URL for the image button. Only applicable when type is set to image. */
	imageUrl?: Maybe<Scalars["String"]["output"]>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** Where the submit button should be located. */
	location?: Maybe<FormSubmitButtonLocationEnum>;
	/** Contains the button text. Only applicable when type is set to text. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** Specifies the type of button to be displayed. Defaults to TEXT. */
	type?: Maybe<FormButtonTypeEnum>;
	/** The width of the submit button element. */
	width?: Maybe<FormSubmitButtonWidthEnum>;
};

/** Where the submit button should be located. */
export type FormSubmitButtonLocationEnum =
	/** The submit button will be placed in a new row after all fields of the form. */
	| "BOTTOM"
	/** The submit button will be placed on the last row of the form where it will fill the remaining space left by field columns. */
	| "INLINE";

/** Submit button width. */
export type FormSubmitButtonWidthEnum =
	/** The width is set to match that of the button text. */
	| "AUTO"
	/** The width is set to fill 100% of the container. */
	| "FULL";

/** Type of button to be displayed. Default is TEXT. */
export type FormsConnectionOrderByEnum =
	/** The date the form was created. */
	| "DATE_CREATED"
	/** The database ID of the form. */
	| "ID"
	/** The Form's active status. */
	| "IS_ACTIVE"
	/** The form's trash status . */
	| "IS_TRASH"
	/** The title of the form. */
	| "TITLE";

/** Options for ordering the connection. */
export type FormsConnectionOrderbyInput = {
	/** The form column name used to sort the results. */
	column?: InputMaybe<FormsConnectionOrderByEnum>;
	/** The field name used to sort the results. */
	field?: InputMaybe<Scalars["String"]["input"]>;
	/** The cardinality of the order of the connection. */
	order?: InputMaybe<OrderEnum>;
};

/** The general setting type */
export type GeneralSettings = {
	/** A date format for all date strings. */
	dateFormat?: Maybe<Scalars["String"]["output"]>;
	/** Site tagline. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** This address is used for admin purposes, like new user notification. */
	email?: Maybe<Scalars["String"]["output"]>;
	/** WordPress locale code. */
	language?: Maybe<Scalars["String"]["output"]>;
	/** A day number of the week that the week should start on. */
	startOfWeek?: Maybe<Scalars["Int"]["output"]>;
	/** A time format for all time strings. */
	timeFormat?: Maybe<Scalars["String"]["output"]>;
	/** A city in the same timezone as you. */
	timezone?: Maybe<Scalars["String"]["output"]>;
	/** Site title. */
	title?: Maybe<Scalars["String"]["output"]>;
	/** Site URL. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** Currencies supported by Gravity Forms. */
export type GfCurrencyEnum =
	/** Australian Dollar . */
	| "AUD"
	/** Brazilian Real . */
	| "BRL"
	/** Canadian Dollar . */
	| "CAD"
	/** Swiss Franc . */
	| "CHF"
	/** Czech Koruna . */
	| "CZK"
	/** Danish Krone . */
	| "DKK"
	/** Euro . */
	| "EUR"
	/** Pound Sterling . */
	| "GBP"
	/** Hong Kong Dollar . */
	| "HKD"
	/** Hungarian Forint . */
	| "HUF"
	/** Israeli New Sheqel . */
	| "ILS"
	/** Japanese Yen . */
	| "JPY"
	/** Mexican Peso . */
	| "MXN"
	/** Malaysian Ringgit . */
	| "MYR"
	/** Norwegian Krone . */
	| "NOK"
	/** New Zealand Dollar . */
	| "NZD"
	/** Philippine Peso . */
	| "PHP"
	/** Polish Zloty . */
	| "PLN"
	/** Russian Ruble . */
	| "RUB"
	/** Swedish Krona . */
	| "SEK"
	/** Singapore Dollar . */
	| "SGD"
	/** Thai Baht . */
	| "THB"
	/** Taiwan New Dollar . */
	| "TWD"
	/** U.S. Dollar . */
	| "USD"
	/** South African Rand . */
	| "ZAR";

/** A Gravity Forms draft entry. */
export type GfDraftEntry = GfEntry &
	Node &
	NodeWithForm & {
		/** The user who created the entry. */
		createdBy?: Maybe<User>;
		/** Database ID of the user that submitted of the form if a logged in user submitted the form. */
		createdByDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Global ID of the user that submitted of the form if a logged in user submitted the form. */
		createdById?: Maybe<Scalars["ID"]["output"]>;
		/** The date and time that the entry was created in local time. */
		dateCreated?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was created in GMT. */
		dateCreatedGmt?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was created in local time. */
		dateUpdated?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was updated in GMT. */
		dateUpdatedGmt?: Maybe<Scalars["String"]["output"]>;
		/** The form object of the node. */
		form?: Maybe<GfForm>;
		/** The database identifier of the form of the node. */
		formDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the GfEntry type and the FormField type */
		formFields?: Maybe<GfEntryToFormFieldConnection>;
		/** The globally unique identifier of the form of the node. */
		formId?: Maybe<Scalars["ID"]["output"]>;
		/** The globally unique ID for the object */
		id: Scalars["ID"]["output"];
		/** Client IP of user who submitted the form. */
		ip?: Maybe<Scalars["String"]["output"]>;
		/** Whether the entry is a draft. */
		isDraft?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the entry has been submitted. */
		isSubmitted?: Maybe<Scalars["Boolean"]["output"]>;
		/** The entry order summary. Null if the entry has no pricing fields */
		orderSummary?: Maybe<GfOrderSummary>;
		/** The resume token. Only applies to draft entries. */
		resumeToken?: Maybe<Scalars["String"]["output"]>;
		/** Source URL of page that contained the form when it was submitted. */
		sourceUrl?: Maybe<Scalars["String"]["output"]>;
		/** Provides the name and version of both the browser and operating system from which the entry was submitted. */
		userAgent?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms draft entry. */
export type GfDraftEntryFormFieldsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Gravity Forms entry interface. */
export type GfEntry = {
	/** The user who created the entry. */
	createdBy?: Maybe<User>;
	/** Database ID of the user that submitted of the form if a logged in user submitted the form. */
	createdByDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Global ID of the user that submitted of the form if a logged in user submitted the form. */
	createdById?: Maybe<Scalars["ID"]["output"]>;
	/** The date and time that the entry was created in local time. */
	dateCreated?: Maybe<Scalars["String"]["output"]>;
	/** The date and time that the entry was created in GMT. */
	dateCreatedGmt?: Maybe<Scalars["String"]["output"]>;
	/** The date and time that the entry was created in local time. */
	dateUpdated?: Maybe<Scalars["String"]["output"]>;
	/** The date and time that the entry was updated in GMT. */
	dateUpdatedGmt?: Maybe<Scalars["String"]["output"]>;
	/** The form object of the node. */
	form?: Maybe<GfForm>;
	/** The database identifier of the form of the node. */
	formDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Connection between the GfEntry type and the FormField type */
	formFields?: Maybe<GfEntryToFormFieldConnection>;
	/** The globally unique identifier of the form of the node. */
	formId?: Maybe<Scalars["ID"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** Client IP of user who submitted the form. */
	ip?: Maybe<Scalars["String"]["output"]>;
	/** Whether the entry is a draft. */
	isDraft?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the entry has been submitted. */
	isSubmitted?: Maybe<Scalars["Boolean"]["output"]>;
	/** The entry order summary. Null if the entry has no pricing fields */
	orderSummary?: Maybe<GfOrderSummary>;
	/** Source URL of page that contained the form when it was submitted. */
	sourceUrl?: Maybe<Scalars["String"]["output"]>;
	/** Provides the name and version of both the browser and operating system from which the entry was submitted. */
	userAgent?: Maybe<Scalars["String"]["output"]>;
};

/** Gravity Forms entry interface. */
export type GfEntryFormFieldsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Connection to GfEntry Nodes */
export type GfEntryConnection = {
	/** A list of edges (relational context) between RootQuery and connected GfEntry Nodes */
	edges: Array<GfEntryConnectionEdge>;
	/** A list of connected GfEntry Nodes */
	nodes: Array<GfEntry>;
	/** Information about pagination in a connection. */
	pageInfo: GfEntryConnectionPageInfo;
};

/** Edge between a Node and a connected GfEntry */
export type GfEntryConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected GfEntry Node */
	node: GfEntry;
};

/** Page Info on the connected GfEntryConnectionEdge */
export type GfEntryConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the GfEntry type and the FormField type */
export type GfEntryToFormFieldConnection = FormFieldConnection & {
	/** Edges for the GfEntryToFormFieldConnection connection */
	edges: Array<GfEntryToFormFieldConnectionEdge>;
	/** The nodes of the connection, without the edges */
	nodes: Array<FormField>;
	/** Information about pagination in a connection. */
	pageInfo: GfEntryToFormFieldConnectionPageInfo;
};

/** An edge in a connection */
export type GfEntryToFormFieldConnectionEdge = FormFieldConnectionEdge & {
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The item at the end of the edge */
	node: FormField;
};

/** Page Info on the &quot;GfEntryToFormFieldConnection&quot; */
export type GfEntryToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the GfEntryToFormFieldConnection connection */
export type GfEntryToFormFieldConnectionWhereArgs = {
	/** Array of form field adminLabels to return. */
	adminLabels?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of Gravity Forms Field types to return. */
	fieldTypes?: InputMaybe<Array<InputMaybe<FormFieldTypeEnum>>>;
	/** Array of form field IDs to return. */
	ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** The form page number to return. */
	pageNumber?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Gravity Forms field choice. */
export type GfFieldChoice = {
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Choice for a form field with the `choices_setting` setting. */
export type GfFieldChoiceWithChoicesSetting = {
	/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
	isSelected?: Maybe<Scalars["Boolean"]["output"]>;
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Choice for a form field with the `columns_setting` setting. */
export type GfFieldChoiceWithColumnsSetting = {
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Choice for a form field with the `name_setting` setting. */
export type GfFieldChoiceWithNameSetting = {
	/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
	isSelected?: Maybe<Scalars["Boolean"]["output"]>;
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Choice for a form field with the `other_choice_setting` setting. */
export type GfFieldChoiceWithOtherChoiceSetting = {
	/** Indicates the radio button item is the “Other” choice. */
	isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** Gravity Forms field input. */
export type GfFieldInput = {
	/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
	id?: Maybe<Scalars["Float"]["output"]>;
	/** The label to be used for the input. */
	label?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `address_setting` setting. */
export type GfFieldInputWithAddressSetting = {
	/** The autocomplete attribute for the field. */
	autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Whether or not this field should be hidden. */
	isHidden?: Maybe<Scalars["Boolean"]["output"]>;
	/** Key used to identify this input. */
	key?: Maybe<Scalars["String"]["output"]>;
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `date_format_setting` setting. */
export type GfFieldInputWithDateFormatSetting = {
	/** The autocomplete attribute for the field. */
	autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `email_confirm_setting` setting. */
export type GfFieldInputWithEmailConfirmationSetting = {
	/** The autocomplete attribute for the field. */
	autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `name_setting` setting. */
export type GfFieldInputWithNameSetting = {
	/** The autocomplete attribute for the field. */
	autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
	hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether or not this field should be hidden. */
	isHidden?: Maybe<Scalars["Boolean"]["output"]>;
	/** Key used to identify this input. */
	key?: Maybe<Scalars["String"]["output"]>;
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `password_setting` setting. */
export type GfFieldInputWithPasswordSetting = {
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Whether or not this field should be hidden. */
	isHidden?: Maybe<Scalars["Boolean"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `select_all_choices_setting` setting. */
export type GfFieldInputWithSelectAllChoicesSetting = {
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	name?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `single_product_inputs` setting. */
export type GfFieldInputWithSingleProductInputs = {
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	name?: Maybe<Scalars["String"]["output"]>;
};

/** An Input for a form field with the `time_format_setting` setting. */
export type GfFieldInputWithTimeFormatSetting = {
	/** The autocomplete attribute for the field. */
	autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
	/** The custom label for the input. When set, this is used in place of the label. */
	customLabel?: Maybe<Scalars["String"]["output"]>;
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** Gravity Forms field value with connected choice. */
export type GfFieldValueWithChoice = {
	/** The selected Gravity Forms field choice object. */
	connectedChoice?: Maybe<GfFieldChoice>;
};

/** Gravity Forms field value with connected input. */
export type GfFieldValueWithInput = {
	/** The selected Gravity Forms field input object. */
	connectedInput?: Maybe<GfFieldInput>;
};

/** A form field with the `add_icon_url_setting` setting. */
export type GfFieldWithAddIconUrlSetting = {
	/** The URL of the image to be used for the add row button. */
	addIconUrl?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `address_setting` setting. */
export type GfFieldWithAddressSetting = {
	/** Determines the type of address to be displayed. */
	addressType?: Maybe<AddressFieldTypeEnum>;
	/** Contains the country that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;INTERATIONAL&quot;. */
	defaultCountry?: Maybe<AddressFieldCountryEnum>;
	/** Contains the province that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;CANADA&quot;. */
	defaultProvince?: Maybe<AddressFieldProvinceEnum>;
	/** Contains the state that will be selected by default. Only applicable when &quot;addressType&quot; is set to &quot;US&quot;. */
	defaultState?: Maybe<AddressFieldProvinceEnum>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `admin_label_setting` setting. */
export type GfFieldWithAdminLabelSetting = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `autocomplete_setting` setting. */
export type GfFieldWithAutocompleteSetting = {
	/** Whether autocomplete should be enabled for this field. */
	hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `base_price_setting` setting. */
export type GfFieldWithBasePriceSetting = {
	/** The price of the product, prefixed by the currency. */
	formattedPrice?: Maybe<Scalars["String"]["output"]>;
	/** The price of the product. */
	price?: Maybe<Scalars["Float"]["output"]>;
};

/** A form field with the `calculation_setting` setting. */
export type GfFieldWithCalculationSetting = {
	/** The formula used for the number field. */
	calculationFormula?: Maybe<Scalars["String"]["output"]>;
	/** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
	calculationRounding?: Maybe<Scalars["Int"]["output"]>;
	/** Indicates whether the number field is a calculation. */
	isCalculation?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `captcha_bg_setting` setting. */
export type GfFieldWithCaptchaBackgroundSetting = {
	/** Determines the image’s background color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
	simpleCaptchaBackgroundColor?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `captcha_badge_setting` setting. */
export type GfFieldWithCaptchaBadgeSetting = {
	/** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
	captchaBadgePosition?: Maybe<CaptchaFieldBadgePositionEnum>;
};

/** A form field with the `captcha_fg_setting` setting. */
export type GfFieldWithCaptchaForegroundSetting = {
	/** Determines the image’s font color, in HEX format (i.e. #CCCCCC). Only applicable to simple_captcha and math captcha types. */
	simpleCaptchaFontColor?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `captcha_language_setting` setting. */
export type GfFieldWithCaptchaLanguageSetting = {
	/** The language used when the captcha is displayed. This property is available when the captchaType is “captcha”, the default. The possible values are the language codes used by WordPress. */
	captchaLanguage?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `captcha_size_setting` setting. */
export type GfFieldWithCaptchaSizeSetting = {
	/** Determines the CAPTCHA image size. Only applicable to simple_captcha and math captcha types. */
	simpleCaptchaSize?: Maybe<FormFieldSizeEnum>;
};

/** A form field with the `captcha_theme_setting` setting. */
export type GfFieldWithCaptchaThemeSetting = {
	/** Determines the theme to be used for the reCAPTCHA field. Only applicable to the recaptcha captcha type. */
	captchaTheme?: Maybe<CaptchaFieldThemeEnum>;
};

/** A form field with the `captcha_type_setting` setting. */
export type GfFieldWithCaptchaTypeSetting = {
	/** Determines the type of CAPTCHA field to be used. */
	captchaType?: Maybe<CaptchaFieldTypeEnum>;
};

/** A form field with the `checkbox_label_setting` setting. */
export type GfFieldWithCheckboxLabelSetting = {
	/** Text of the consent checkbox. */
	checkboxLabel?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms field with possible field choices. */
export type GfFieldWithChoices = {
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
};

/** A form field with the `choices_setting` setting. */
export type GfFieldWithChoicesSetting = {
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
	hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `columns_setting` setting. */
export type GfFieldWithColumnsSetting = {
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Determines if the field should use multiple columns. Default is false. */
	hasColumns?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `conditional_logic_setting` setting. */
export type GfFieldWithConditionalLogicSetting = {
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
};

/** A form field with the `content_setting` setting. */
export type GfFieldWithContentSetting = {
	/** Content of an HTML block field to be displayed on the form. */
	content?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `copy_values_option` setting. */
export type GfFieldWithCopyValuesOptionSetting = {
	/** The field id of the field being used as the copy source. */
	copyValuesOptionFieldId?: Maybe<Scalars["Int"]["output"]>;
	/** The label that appears next to the copy values option when the form is displayed. The default value is \“Same as previous\”. */
	copyValuesOptionLabel?: Maybe<Scalars["String"]["output"]>;
	/** Indicates whether the copy values option can be used. This option allows users to skip filling out the field and use the same values as another. For example, if the mailing and billing address are the same. */
	shouldCopyValuesOption?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `css_class_setting` setting. */
export type GfFieldWithCssClassSetting = {
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `date_format_setting` setting. */
export type GfFieldWithDateFormatSetting = {
	/** Determines how the date is displayed. */
	dateFormat?: Maybe<DateFieldFormatEnum>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `date_input_type_setting` setting. */
export type GfFieldWithDateInputTypeSetting = {
	/** Determines how the date field displays it’s calendar icon. */
	calendarIconType?: Maybe<FormFieldCalendarIconTypeEnum>;
	/** Contains the URL to the custom calendar icon. Only applicable when calendarIconType is set to custom. */
	calendarIconUrl?: Maybe<Scalars["String"]["output"]>;
	/** The type of date field to display. */
	dateType?: Maybe<DateFieldTypeEnum>;
};

/** A form field with the `default_value_setting` setting. */
export type GfFieldWithDefaultValueSetting = {
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `delete_icon_url_setting` setting. */
export type GfFieldWithDeleteIconUrlSetting = {
	/** The URL of the image to be used for the delete row button. */
	deleteIconUrl?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `description_setting` setting. */
export type GfFieldWithDescriptionSetting = {
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `disable_margins_setting` setting. */
export type GfFieldWithDisableMarginsSetting = {
	/** Indicates whether the default margins are turned on to align the HTML content with other fields. */
	hasMargins?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `disable_quantity_setting` setting. */
export type GfFieldWithDisableQuantitySetting = {
	/** Whether the field has the quantity property enabled. */
	hasQuantity?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Whether the quantity property should be disabled for this field.
	 * @deprecated Use `hasQuantity` instead
	 */
	isQuantityDisabled?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `duplicate_setting` setting. */
export type GfFieldWithDuplicatesSetting = {
	/** Determines if the field allows duplicate submissions. */
	shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `enable_enhanced_ui_setting` setting. */
export type GfFieldWithEnhancedUiSetting = {
	/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
	hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `error_message_setting` setting. */
export type GfFieldWithErrorMessageSetting = {
	/** Contains the message that is displayed for fields that fail validation. */
	errorMessage?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `file_extensions_setting` setting. */
export type GfFieldWithFileExtensionsSetting = {
	/** A comma-delimited list of the file extensions which may be uploaded. */
	allowedExtensions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

/** A form field with the `file_size_setting` setting. */
export type GfFieldWithFileSizeSetting = {
	/** The maximum size (in MB) an uploaded file may be . */
	maxFileSize?: Maybe<Scalars["Int"]["output"]>;
};

/** A form field with the `input_mask_setting` setting. */
export type GfFieldWithInputMaskSetting = {
	/** Whether the field has an input mask. */
	hasInputMask?: Maybe<Scalars["Boolean"]["output"]>;
	/** The pattern used for the input mask. */
	inputMaskValue?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms field with possible field inputs. */
export type GfFieldWithInputs = {
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `label_placement_setting` setting. */
export type GfFieldWithLabelPlacementSetting = {
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
};

/** A form field with the `label_setting` setting. */
export type GfFieldWithLabelSetting = {
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `maxlen_setting` setting. */
export type GfFieldWithMaxLengthSetting = {
	/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
	maxLength?: Maybe<Scalars["Int"]["output"]>;
};

/** A form field with the `maxrows_setting` setting. */
export type GfFieldWithMaxRowsSetting = {
	/** The maximum number of rows the user can add to the field. */
	maxRows?: Maybe<Scalars["Int"]["output"]>;
};

/** A form field with the `multiple_files_setting` setting. */
export type GfFieldWithMultipleFilesSetting = {
	/** Indicates whether multiple files may be uploaded. */
	canAcceptMultipleFiles?: Maybe<Scalars["Boolean"]["output"]>;
	/** When the field is set to allow multiple files to be uploaded, this property is available to set a limit on how many may be uploaded. */
	maxFiles?: Maybe<Scalars["Int"]["output"]>;
};

/** A form field with the `name_setting` setting. */
export type GfFieldWithNameSetting = {
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `next_button_setting` setting. */
export type GfFieldWithNextButtonSetting = {
	/** An array containing the the individual properties for the &quot;Next&quot; button. */
	nextButton?: Maybe<FormButton>;
};

/** A form field with the `number_format_setting` setting. */
export type GfFieldWithNumberFormatSetting = {
	/** Specifies the format allowed for the number field. */
	numberFormat?: Maybe<NumberFieldFormatEnum>;
};

/** A form field with the `other_choice_setting` setting. */
export type GfFieldWithOtherChoiceSetting = {
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
	hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
	/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
	hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `password_field_setting` setting. */
export type GfFieldWithPasswordFieldSetting = {
	/** Determines if a text field input tag should be created with a &quot;password&quot; type. */
	isPasswordInput?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `password_setting` setting. */
export type GfFieldWithPasswordSetting = {
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `password_strength_setting` setting. */
export type GfFieldWithPasswordStrengthSetting = {
	/** Indicates whether the field displays the password strength indicator. */
	hasPasswordStrengthIndicator?: Maybe<Scalars["Boolean"]["output"]>;
	/** Indicates how strong the password should be. */
	minPasswordStrength?: Maybe<PasswordFieldMinStrengthEnum>;
};

/** A form field with the `password_visibility_setting` setting. */
export type GfFieldWithPasswordVisibilitySetting = {
	/** Whether the Password visibility toggle should be enabled for this field. */
	hasPasswordVisibilityToggle?: Maybe<Scalars["Boolean"]["output"]>;
};

/** The form field-specifc policies for exporting and erasing personal data. */
export type GfFieldWithPersonalData = {
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
};

/** A form field with the `phone_format_setting` setting. */
export type GfFieldWithPhoneFormatSetting = {
	/** Determines the allowed format for phones. If the phone value does not conform with the specified format, the field will fail validation. */
	phoneFormat?: Maybe<PhoneFieldFormatEnum>;
};

/** A form field with the `placeholder_setting` setting. */
export type GfFieldWithPlaceholderSetting = {
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `post_category_checkbox_setting` setting. */
export type GfFieldWithPostCategoryCheckboxSetting = {
	/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
	hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `post_category_initial_item_setting` setting. */
export type GfFieldWithPostCategoryInitialItemSetting = {
	/** The dropdown placeholder for the field. */
	dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `post_custom_field_setting` setting. */
export type GfFieldWithPostCustomFieldSetting = {
	/** The post meta key to which the value should be assigned. */
	postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
};

/** A form field with the `post_image_featured_image` setting. */
export type GfFieldWithPostImageFeaturedImageSetting = {
	/** Whether the image field should be used to set the post&#039;s Featured Image */
	isFeaturedImage?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `post_image_setting` setting. */
export type GfFieldWithPostImageSetting = {
	/** A comma-delimited list of the file extensions which may be uploaded. */
	allowedExtensions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** Controls the visibility of the alt metadata for Post Image fields. */
	hasAlt?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the caption metadata for Post Image fields. */
	hasCaption?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the description metadata for Post Image fields. */
	hasDescription?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the title metadata for Post Image fields. */
	hasTitle?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `prepopulate_field_setting` setting. */
export type GfFieldWithPrepopulateFieldSetting = {
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `previous_button` setting. */
export type GfFieldWithPreviousButton = {
	/** An array containing the the individual properties for the &quot;Previous&quot; button. */
	previousButton?: Maybe<FormButton>;
};

/** A form field with the `product_field_setting` setting. */
export type GfFieldWithProductFieldSetting = {
	/** The id of the product field to which the field is associated. */
	productField?: Maybe<Scalars["Int"]["output"]>;
};

/** A form field with the `range_setting` setting. */
export type GfFieldWithRangeSetting = {
	/** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
	rangeMax?: Maybe<Scalars["Float"]["output"]>;
	/** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
	rangeMin?: Maybe<Scalars["Float"]["output"]>;
};

/** A form field with the `rich_text_editor_setting` setting. */
export type GfFieldWithRichTextEditorSetting = {
	/** Indicates whether the field uses the rich text editor interface. */
	hasRichTextEditor?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `rules_setting` setting. */
export type GfFieldWithRulesSetting = {
	/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
	isRequired?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A form field with the `select_all_choices_setting` setting. */
export type GfFieldWithSelectAllChoicesSetting = {
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Whether the \&quot;select all\&quot; choice should be displayed. */
	hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `single_product_inputs` setting. */
export type GfFieldWithSingleProductInputs = {
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
};

/** A form field with the `size_setting` setting. */
export type GfFieldWithSizeSetting = {
	/** Determines the size of the field when displayed on the page. */
	size?: Maybe<FormFieldSizeEnum>;
};

/** A form field with the `sub_label_placement_setting` setting. */
export type GfFieldWithSubLabelPlacementSetting = {
	/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
	subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
};

/** A form field with the `time_format_setting` setting. */
export type GfFieldWithTimeFormatSetting = {
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
	/** Determines how the time is displayed. */
	timeFormat?: Maybe<TimeFieldFormatEnum>;
};

/** Gravity Forms form. */
export type GfForm = DatabaseIdentifier &
	Node & {
		/**
		 * Contains the form button settings such as the button text or image button source.
		 * @deprecated Use `submitButton` field instead
		 */
		button?: Maybe<FormSubmitButton>;
		/** Contains the form confirmation settings such as confirmation text or redirect URL. */
		confirmations?: Maybe<Array<Maybe<FormConfirmation>>>;
		/** String containing the custom CSS classes to be added to the &lt;form&gt; tag. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** The custom text to use to indicate a field is required. */
		customRequiredIndicator?: Maybe<Scalars["String"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The date and time that the entry was created in local time. */
		dateCreated?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was created in GMT. */
		dateCreatedGmt?: Maybe<Scalars["String"]["output"]>;
		/** Form description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field description is displayed above the field input (i.e. immediately after the field label) or below the field input. */
		descriptionPlacement?: Maybe<FormDescriptionPlacementEnum>;
		/** Connection between the GfForm type and the GfEntry type */
		entries?: Maybe<GfFormToGfEntryConnection>;
		/** The entry limit settings. */
		entryLimits?: Maybe<FormEntryLimits>;
		/** CSS class for the first page. */
		firstPageCssClass?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the GfForm type and the FormField type */
		formFields?: Maybe<GfFormToFormFieldConnection>;
		/**
		 * Form ID.
		 * @deprecated Deprecated in favor of the databaseId field.
		 */
		formId?: Maybe<Scalars["Int"]["output"]>;
		/** When enabled, conditional logic hide/show operation will be performed with a jQuery slide animation. Only applicable to forms with conditional logic. */
		hasConditionalLogicAnimation?: Maybe<Scalars["Boolean"]["output"]>;
		/** Specifies if the form has the Honeypot spam-protection feature. */
		hasHoneypot?: Maybe<Scalars["Boolean"]["output"]>;
		/** If enabled, will show a summary that lists form validation errors at the top of the form when a user attempts a failed submission. */
		hasValidationSummary?: Maybe<Scalars["Boolean"]["output"]>;
		/** The globally unique ID for the object */
		id: Scalars["ID"]["output"];
		/** Determines whether the form is active. */
		isActive?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines whether the form is in the trash. */
		isTrash?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines where the field labels should be placed in relation to the field. */
		labelPlacement?: Maybe<FormLabelPlacementEnum>;
		/**
		 * Last page button data.
		 * @deprecated Use `pagination.lastPageButton` instead
		 */
		lastPageButton?: Maybe<FormLastPageButton>;
		/** Login requirements data. */
		login?: Maybe<FormLogin>;
		/** The Gravity Forms markup version. */
		markupVersion?: Maybe<Scalars["Int"]["output"]>;
		/** The ID to assign to the next field that is added to the form. */
		nextFieldId?: Maybe<Scalars["Int"]["output"]>;
		/** The properties for all the email notifications which exist for a form. */
		notifications?: Maybe<Array<Maybe<FormNotification>>>;
		/** Pagination data. */
		pagination?: Maybe<FormPagination>;
		/** Personal data settings. */
		personalData?: Maybe<FormPersonalData>;
		/** Post creation data. */
		postCreation?: Maybe<FormPostCreation>;
		/** Type of indicator to use when field is required. */
		requiredIndicator?: Maybe<FormFieldRequiredIndicatorEnum>;
		/** \&quot;Save and Continue\&quot; data. */
		saveAndContinue?: Maybe<FormSaveAndContinue>;
		/** Form scheduling data. */
		scheduling?: Maybe<FormSchedule>;
		/** How sub-labels are aligned. */
		subLabelPlacement?: Maybe<FormSubLabelPlacementEnum>;
		/** Contains the form button settings such as the button text or image button source. */
		submitButton?: Maybe<FormSubmitButton>;
		/** Form title. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The version of Gravity Forms used to create this form. */
		version?: Maybe<Scalars["String"]["output"]>;
	};

/** Gravity Forms form. */
export type GfFormEntriesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<GfFormToGfEntryConnectionWhereArgs>;
};

/** Gravity Forms form. */
export type GfFormFormFieldsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<GfFormToFormFieldConnectionWhereArgs>;
};

/** Connection to GfForm Nodes */
export type GfFormConnection = {
	/** A list of edges (relational context) between RootQuery and connected GfForm Nodes */
	edges: Array<GfFormConnectionEdge>;
	/** A list of connected GfForm Nodes */
	nodes: Array<GfForm>;
	/** Information about pagination in a connection. */
	pageInfo: GfFormConnectionPageInfo;
};

/** Edge between a Node and a connected GfForm */
export type GfFormConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected GfForm Node */
	node: GfForm;
};

/** Page Info on the connected GfFormConnectionEdge */
export type GfFormConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the GfForm type and the FormField type */
export type GfFormToFormFieldConnection = FormFieldConnection & {
	/** Edges for the GfFormToFormFieldConnection connection */
	edges: Array<GfFormToFormFieldConnectionEdge>;
	/** The nodes of the connection, without the edges */
	nodes: Array<FormField>;
	/** Information about pagination in a connection. */
	pageInfo: GfFormToFormFieldConnectionPageInfo;
};

/** An edge in a connection */
export type GfFormToFormFieldConnectionEdge = FormFieldConnectionEdge & {
	/** A cursor for use in pagination */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The item at the end of the edge */
	node: FormField;
};

/** Page Info on the &quot;GfFormToFormFieldConnection&quot; */
export type GfFormToFormFieldConnectionPageInfo = FormFieldConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the GfFormToFormFieldConnection connection */
export type GfFormToFormFieldConnectionWhereArgs = {
	/** Array of form field adminLabels to return. */
	adminLabels?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of Gravity Forms Field types to return. */
	fieldTypes?: InputMaybe<Array<InputMaybe<FormFieldTypeEnum>>>;
	/** Array of form field IDs to return. */
	ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** The form page number to return. */
	pageNumber?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection between the GfForm type and the GfEntry type */
export type GfFormToGfEntryConnection = Connection &
	GfEntryConnection & {
		/** The number of (filtered) entries submitted to the form. */
		count?: Maybe<Scalars["Int"]["output"]>;
		/** Edges for the GfFormToGfEntryConnection connection */
		edges: Array<GfFormToGfEntryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<GfEntry>;
		/** Information about pagination in a connection. */
		pageInfo: GfFormToGfEntryConnectionPageInfo;
	};

/** An edge in a connection */
export type GfFormToGfEntryConnectionEdge = Edge &
	GfEntryConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: GfEntry;
	};

/** Page Info on the &quot;GfFormToGfEntryConnection&quot; */
export type GfFormToGfEntryConnectionPageInfo = GfEntryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the GfFormToGfEntryConnection connection */
export type GfFormToGfEntryConnectionWhereArgs = {
	/** Date filters to apply. */
	dateFilters?: InputMaybe<EntriesDateFiltersInput>;
	/** Field-specific filters to apply. */
	fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
	/** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
	fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
	/** How to sort the entries. */
	orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
	/** Entry status. Default is "ACTIVE". */
	status?: InputMaybe<EntryStatusEnum>;
};

/** A form field with the `email_confirm_setting` setting. */
export type GfGfFieldWithEmailConfirmationSetting = {
	/** Determines whether the Confirm Email field is active. */
	hasEmailConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
	/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
	subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
};

/** Gravity Forms Logging Settings. */
export type GfLogger = {
	/** Whether the logger is enabled. */
	isEnabled?: Maybe<Scalars["Boolean"]["output"]>;
	/** The name of the Gravity Forms logger. */
	name?: Maybe<Scalars["String"]["output"]>;
};

/** The entry order item. */
export type GfOrderItem = {
	/** The form field that the order item is connected to */
	connectedFormField?: Maybe<FormField>;
	/** The currency used for the order item */
	currency?: Maybe<GfCurrencyEnum>;
	/** The item description */
	description?: Maybe<Scalars["String"]["output"]>;
	/** Whether this is a discount item */
	isDiscount?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is a line item */
	isLineItem?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is a recurring item */
	isRecurring?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is a setup fee */
	isSetupFee?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is a shipping fee */
	isShipping?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether this is a trial item */
	isTrial?: Maybe<Scalars["Boolean"]["output"]>;
	/** The item name */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The item options */
	options?: Maybe<Array<Maybe<GfOrderItemOption>>>;
	/** The item price */
	price?: Maybe<Scalars["Float"]["output"]>;
	/** The item quantity */
	quantity?: Maybe<Scalars["Float"]["output"]>;
	/** The section this order item belongs to. */
	section?: Maybe<Scalars["String"]["output"]>;
	/** The item subtotal */
	subtotal?: Maybe<Scalars["Float"]["output"]>;
};

/** An option on an Order item. */
export type GfOrderItemOption = {
	/** The form field that the order item is connected to */
	connectedFormField?: Maybe<FormField>;
	/** The option&#039;s field label. */
	fieldLabel?: Maybe<Scalars["String"]["output"]>;
	/** The option name. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The option label. */
	optionLabel?: Maybe<Scalars["String"]["output"]>;
	/** The option price. */
	price?: Maybe<Scalars["Float"]["output"]>;
};

/** The entry order information. */
export type GfOrderSummary = {
	/** The currency used for the order */
	currency?: Maybe<GfCurrencyEnum>;
	/** The order item details. */
	items?: Maybe<Array<Maybe<GfOrderItem>>>;
	/** The order subtotal. */
	subtotal?: Maybe<Scalars["Float"]["output"]>;
	/** The order total */
	total?: Maybe<Scalars["Float"]["output"]>;
};

/** Gravity Forms Settings. */
export type GfSettings = {
	/** The default currency for your forms. Used for product, credit card, and other fields. */
	currency?: Maybe<GfCurrencyEnum>;
	/** Whether Gravity Forms to download and install bug fixes and security updates automatically in the background. Requires a valid license key. */
	hasBackgroundUpdates?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to output Gravity Forms&#039; default CSS. */
	hasDefaultCss?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to display the forms menu in the WordPress top toolbar. The forms menu will display the ten forms recently opened in the form editor. */
	hasToolbar?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the server-generated form markup uses HTML5. */
	isHtml5Enabled?: Maybe<Scalars["Boolean"]["output"]>;
	/** Enable to prevent extraneous scripts and styles from being printed on a Gravity Forms admin pages, reducing conflicts with other plugins and themes. */
	isNoConflictModeEnabled?: Maybe<Scalars["Boolean"]["output"]>;
	/** Logging settings. */
	logging?: Maybe<GfSettingsLogging>;
	/** Recaptcha settings. */
	recaptcha?: Maybe<GfSettingsRecaptcha>;
};

/** Gravity Forms Logging Settings. */
export type GfSettingsLogging = {
	/** Whether Gravity Forms internal logging is enabled. Logging allows you to easily debug the inner workings of Gravity Forms to solve any possible issues. */
	isLoggingEnabled?: Maybe<Scalars["Boolean"]["output"]>;
	/** A list of registered Gravity Forms loggers and their configurations. */
	loggers?: Maybe<Array<Maybe<GfLogger>>>;
};

/** Gravity Forms reCAPTCHA Settings. */
export type GfSettingsRecaptcha = {
	/** The public reCAPTCHA site key. */
	publicKey?: Maybe<Scalars["String"]["output"]>;
	/** The type of of reCAPTCHA v2 to be used */
	type?: Maybe<RecaptchaTypeEnum>;
};

/** A Gravity Forms submitted entry. */
export type GfSubmittedEntry = DatabaseIdentifier &
	GfEntry &
	Node &
	NodeWithForm & {
		/** The user who created the entry. */
		createdBy?: Maybe<User>;
		/** Database ID of the user that submitted of the form if a logged in user submitted the form. */
		createdByDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Global ID of the user that submitted of the form if a logged in user submitted the form. */
		createdById?: Maybe<Scalars["ID"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The date and time that the entry was created in local time. */
		dateCreated?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was created in GMT. */
		dateCreatedGmt?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was created in local time. */
		dateUpdated?: Maybe<Scalars["String"]["output"]>;
		/** The date and time that the entry was updated in GMT. */
		dateUpdatedGmt?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The entry ID. Returns null for draft entries.
		 * @deprecated Deprecated in favor of the databaseId field.
		 */
		entryId?: Maybe<Scalars["Int"]["output"]>;
		/** The form object of the node. */
		form?: Maybe<GfForm>;
		/** The database identifier of the form of the node. */
		formDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the GfEntry type and the FormField type */
		formFields?: Maybe<GfEntryToFormFieldConnection>;
		/** The globally unique identifier of the form of the node. */
		formId?: Maybe<Scalars["ID"]["output"]>;
		/** The globally unique ID for the object */
		id: Scalars["ID"]["output"];
		/** Client IP of user who submitted the form. */
		ip?: Maybe<Scalars["String"]["output"]>;
		/** Whether the entry is a draft. */
		isDraft?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the entry has been read. */
		isRead?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates if the entry has been starred (i.e marked with a star). */
		isStarred?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the entry has been submitted. */
		isSubmitted?: Maybe<Scalars["Boolean"]["output"]>;
		/** The entry order summary. Null if the entry has no pricing fields */
		orderSummary?: Maybe<GfOrderSummary>;
		/** For forms with Post fields, this is the post object that was created. */
		post?: Maybe<Post>;
		/** For forms with Post fields, this property contains the Id of the Post that was created. */
		postDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Source URL of page that contained the form when it was submitted. */
		sourceUrl?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the entry. */
		status?: Maybe<EntryStatusEnum>;
		/** Provides the name and version of both the browser and operating system from which the entry was submitted. */
		userAgent?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms submitted entry. */
export type GfSubmittedEntryFormFieldsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<GfEntryToFormFieldConnectionWhereArgs>;
};

/** Connection to GfSubmittedEntry Nodes */
export type GfSubmittedEntryConnection = {
	/** A list of edges (relational context) between RootQuery and connected GfSubmittedEntry Nodes */
	edges: Array<GfSubmittedEntryConnectionEdge>;
	/** A list of connected GfSubmittedEntry Nodes */
	nodes: Array<GfSubmittedEntry>;
	/** Information about pagination in a connection. */
	pageInfo: GfSubmittedEntryConnectionPageInfo;
};

/** Edge between a Node and a connected GfSubmittedEntry */
export type GfSubmittedEntryConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected GfSubmittedEntry Node */
	node: GfSubmittedEntry;
};

/** Page Info on the connected GfSubmittedEntryConnectionEdge */
export type GfSubmittedEntryConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms hidden field. */
export type HiddenField = FormField &
	GfFieldWithDefaultValueSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting & {
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
	/** The name of the Content Type the node belongs to */
	contentTypeName: Scalars["String"]["output"];
	/** The unique identifier stored in the database */
	databaseId: Scalars["Int"]["output"];
	/** Post publishing date. */
	date?: Maybe<Scalars["String"]["output"]>;
	/** The publishing date set in GMT. */
	dateGmt?: Maybe<Scalars["String"]["output"]>;
	/** The desired slug of the post */
	desiredSlug?: Maybe<Scalars["String"]["output"]>;
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
	/** The RSS enclosure for the object */
	enclosure?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the object is a node in the preview state */
	isPreview?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The user that most recently edited the node */
	lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
	/** The permalink of the post */
	link?: Maybe<Scalars["String"]["output"]>;
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: Maybe<Scalars["String"]["output"]>;
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: Maybe<Scalars["String"]["output"]>;
	/** The parent of the node. The parent object can be of various types */
	parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars["ID"]["output"]>;
	/** The database id of the preview node */
	previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Whether the object is a node in the preview state */
	previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: Maybe<Scalars["String"]["output"]>;
	/** The current status of the object */
	status?: Maybe<Scalars["String"]["output"]>;
	/** The template assigned to a node of content */
	template?: Maybe<ContentTemplate>;
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
		edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
	};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge =
	ContentNodeConnectionEdge &
		Edge & {
			/** A cursor for use in pagination */
			cursor?: Maybe<Scalars["String"]["output"]>;
			/** The item at the end of the edge */
			node: ContentNode;
		};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo =
	ContentNodeConnectionPageInfo &
		PageInfo &
		WpPageInfo & {
			/** When paginating forwards, the cursor to continue. */
			endCursor?: Maybe<Scalars["String"]["output"]>;
			/** When paginating forwards, are there more items? */
			hasNextPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, are there more items? */
			hasPreviousPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, the cursor to continue. */
			startCursor?: Maybe<Scalars["String"]["output"]>;
		};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
		edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
	};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo =
	ContentNodeConnectionPageInfo &
		PageInfo &
		WpPageInfo & {
			/** When paginating forwards, the cursor to continue. */
			endCursor?: Maybe<Scalars["String"]["output"]>;
			/** When paginating forwards, are there more items? */
			hasNextPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, are there more items? */
			hasPreviousPage: Scalars["Boolean"]["output"];
			/** When paginating backwards, the cursor to continue. */
			startCursor?: Maybe<Scalars["String"]["output"]>;
		};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: ContentNode;
	};

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
	/** The unique identifier stored in the database */
	databaseId: Scalars["Int"]["output"];
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars["ID"]["output"]>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
	/** The number of objects connected to the object */
	count?: Maybe<Scalars["Int"]["output"]>;
	/** The unique identifier stored in the database */
	databaseId: Scalars["Int"]["output"];
	/** The description of the object */
	description?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The link to the term */
	link?: Maybe<Scalars["String"]["output"]>;
	/** The human friendly name of the object. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars["ID"]["output"]>;
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: Maybe<Scalars["String"]["output"]>;
	/** The name of the taxonomy that the object is associated with */
	taxonomyName?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the term group that this term object belongs to */
	termGroupId?: Maybe<Scalars["Int"]["output"]>;
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: Maybe<Scalars["Int"]["output"]>;
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A Gravity Forms html field. */
export type HtmlField = FormField &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithContentSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDisableMarginsSetting &
	GfFieldWithLabelSetting & {
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** Content of an HTML block field to be displayed on the form. */
		content?: Maybe<Scalars["String"]["output"]>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the default margins are turned on to align the HTML content with other fields. */
		hasMargins?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The individual properties for each element of the PostImage value field. */
export type ImageFieldValue = {
	/** The image alt text. */
	altText?: Maybe<Scalars["String"]["output"]>;
	/** The path to the parent directory of the file. */
	basePath?: Maybe<Scalars["String"]["output"]>;
	/** The base url to the parent directory of the file. */
	baseUrl?: Maybe<Scalars["String"]["output"]>;
	/** The image caption. */
	caption?: Maybe<Scalars["String"]["output"]>;
	/** The image description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The filename. */
	filename?: Maybe<Scalars["String"]["output"]>;
	/** The image title. */
	title?: Maybe<Scalars["String"]["output"]>;
	/** The url to the file. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms list field. */
export type ListField = FormField &
	GfFieldWithAddIconUrlSetting &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithColumnsSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDeleteIconUrlSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxRowsSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting & {
		/** The URL of the image to be used for the add row button. */
		addIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** The URL of the image to be used for the delete row button. */
		deleteIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field should use multiple columns. Default is false. */
		hasColumns?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** List field value. */
		listValues?: Maybe<Array<Maybe<ListFieldValue>>>;
		/** The maximum number of rows the user can add to the field. */
		maxRows?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ListFieldChoice choice values. */
export type ListFieldChoice = GfFieldChoice &
	GfFieldChoiceWithColumnsSetting & {
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** Input fields for a single List field item. */
export type ListFieldInput = {
	/** Input values for the specific listField row. */
	rowValues?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** The individual properties for each element of the List value field. */
export type ListFieldValue = {
	/** Input values. */
	values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

/** File details for a Media Item */
export type MediaDetails = {
	/** The filename of the mediaItem */
	file?: Maybe<Scalars["String"]["output"]>;
	/** The height of the mediaItem */
	height?: Maybe<Scalars["Int"]["output"]>;
	/** Meta information associated with the mediaItem */
	meta?: Maybe<MediaItemMeta>;
	/** The available sizes of the mediaItem */
	sizes?: Maybe<Array<Maybe<MediaSize>>>;
	/** The width of the mediaItem */
	width?: Maybe<Scalars["Int"]["output"]>;
};

/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
	exclude?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
	include?: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** The mediaItem type */
export type MediaItem = ContentNode &
	DatabaseIdentifier &
	HierarchicalContentNode &
	HierarchicalNode &
	Node &
	NodeWithAuthor &
	NodeWithComments &
	NodeWithTemplate &
	NodeWithTitle &
	UniformResourceIdentifiable & {
		/** Alternative text to display when resource is not displayed */
		altText?: Maybe<Scalars["String"]["output"]>;
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars["ID"]["output"]>;
		/** The caption for the resource */
		caption?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the MediaItem type and the Comment type */
		comments?: Maybe<MediaItemToCommentConnection>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The name of the Content Type the node belongs to */
		contentTypeName: Scalars["String"]["output"];
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Post publishing date. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** Description of the image (stored as post_content) */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars["String"]["output"]>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The filesize in bytes of the resource */
		fileSize?: Maybe<Scalars["Int"]["output"]>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the attachment object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars["String"]["output"]>;
		/** Details about the mediaItem */
		mediaDetails?: Maybe<MediaDetails>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		mediaItemId: Scalars["Int"]["output"];
		/** Url of the mediaItem */
		mediaItemUrl?: Maybe<Scalars["String"]["output"]>;
		/** Type of resource */
		mediaType?: Maybe<Scalars["String"]["output"]>;
		/** The mime type of the mediaItem */
		mimeType?: Maybe<Scalars["String"]["output"]>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars["String"]["output"]>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars["String"]["output"]>;
		/** The parent of the node. The parent object can be of various types */
		parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars["ID"]["output"]>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
		/** The sizes attribute value for an image. */
		sizes?: Maybe<Scalars["String"]["output"]>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** Url of the mediaItem */
		sourceUrl?: Maybe<Scalars["String"]["output"]>;
		/** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
		srcSet?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the object */
		status?: Maybe<Scalars["String"]["output"]>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCaptionArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemChildrenArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemCommentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
	size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSizesArgs = {
	size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
	size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
	size?: InputMaybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
	/** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
	edges: Array<MediaItemConnectionEdge>;
	/** A list of connected mediaItem Nodes */
	nodes: Array<MediaItem>;
	/** Information about pagination in a connection. */
	pageInfo: MediaItemConnectionPageInfo;
};

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected mediaItem Node */
	node: MediaItem;
};

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type MediaItemIdType =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	| "SLUG"
	/** Identify a media item by its source url */
	| "SOURCE_URL"
	/** Identify a resource by the URI. */
	| "URI";

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
	/** Aperture measurement of the media item. */
	aperture?: Maybe<Scalars["Float"]["output"]>;
	/** Information about the camera used to create the media item. */
	camera?: Maybe<Scalars["String"]["output"]>;
	/** The text string description associated with the media item. */
	caption?: Maybe<Scalars["String"]["output"]>;
	/** Copyright information associated with the media item. */
	copyright?: Maybe<Scalars["String"]["output"]>;
	/** The date/time when the media was created. */
	createdTimestamp?: Maybe<Scalars["Int"]["output"]>;
	/** The original creator of the media item. */
	credit?: Maybe<Scalars["String"]["output"]>;
	/** The focal length value of the media item. */
	focalLength?: Maybe<Scalars["Float"]["output"]>;
	/** The ISO (International Organization for Standardization) value of the media item. */
	iso?: Maybe<Scalars["Int"]["output"]>;
	/** List of keywords used to describe or identfy the media item. */
	keywords?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** The vertical or horizontal aspect of the media item. */
	orientation?: Maybe<Scalars["String"]["output"]>;
	/** The shutter speed information of the media item. */
	shutterSpeed?: Maybe<Scalars["Float"]["output"]>;
	/** A useful title for the media item. */
	title?: Maybe<Scalars["String"]["output"]>;
};

/** The size of the media item object. */
export type MediaItemSizeEnum =
	/** MediaItem with the large size */
	| "LARGE"
	/** MediaItem with the medium size */
	| "MEDIUM"
	/** MediaItem with the medium_large size */
	| "MEDIUM_LARGE"
	/** MediaItem with the thumbnail size */
	| "THUMBNAIL"
	/** MediaItem with the 1536x1536 size */
	| "_1536X1536"
	/** MediaItem with the 2048x2048 size */
	| "_2048X2048";

/** The status of the media item object. */
export type MediaItemStatusEnum =
	/** Objects with the auto-draft status */
	| "AUTO_DRAFT"
	/** Objects with the inherit status */
	| "INHERIT"
	/** Objects with the private status */
	| "PRIVATE"
	/** Objects with the trash status */
	| "TRASH";

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the MediaItemToCommentConnection connection */
		edges: Array<MediaItemToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: MediaItemToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Details of an available size for a media item */
export type MediaSize = {
	/** The filename of the referenced size */
	file?: Maybe<Scalars["String"]["output"]>;
	/** The filesize of the resource */
	fileSize?: Maybe<Scalars["Int"]["output"]>;
	/** The height of the referenced size */
	height?: Maybe<Scalars["String"]["output"]>;
	/** The mime type of the referenced size */
	mimeType?: Maybe<Scalars["String"]["output"]>;
	/** The referenced size name */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The url of the referenced size */
	sourceUrl?: Maybe<Scalars["String"]["output"]>;
	/** The width of the referenced size */
	width?: Maybe<Scalars["String"]["output"]>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier &
	Node & {
		/** The number of items in the menu */
		count?: Maybe<Scalars["Int"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The globally unique identifier of the nav menu object. */
		id: Scalars["ID"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** The locations a menu is assigned to */
		locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/**
		 * WP ID of the nav menu.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the Menu type and the MenuItem type */
		menuItems?: Maybe<MenuToMenuItemConnection>;
		/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
		slug?: Maybe<Scalars["String"]["output"]>;
	};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Connection to Menu Nodes */
export type MenuConnection = {
	/** A list of edges (relational context) between RootQuery and connected Menu Nodes */
	edges: Array<MenuConnectionEdge>;
	/** A list of connected Menu Nodes */
	nodes: Array<Menu>;
	/** Information about pagination in a connection. */
	pageInfo: MenuConnectionPageInfo;
};

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Menu Node */
	node: Menu;
};

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier &
	Node & {
		/** Connection between the MenuItem type and the MenuItem type */
		childItems?: Maybe<MenuItemToMenuItemConnection>;
		/** Connection from MenuItem to it&#039;s connected node */
		connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
		/**
		 * The object connected to this menu item.
		 * @deprecated Deprecated in favor of the connectedNode field
		 */
		connectedObject?: Maybe<MenuItemObjectUnion>;
		/** Class attribute for the menu item link */
		cssClasses?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Description of the menu item. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the nav menu item object. */
		id: Scalars["ID"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Label or title of the menu item. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Link relationship (XFN) of the menu item. */
		linkRelationship?: Maybe<Scalars["String"]["output"]>;
		/** The locations the menu item&#039;s Menu is assigned to */
		locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
		/** The Menu a MenuItem is part of */
		menu?: Maybe<MenuItemToMenuConnectionEdge>;
		/**
		 * WP ID of the menu item.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		menuItemId?: Maybe<Scalars["Int"]["output"]>;
		/** Menu item order */
		order?: Maybe<Scalars["Int"]["output"]>;
		/** The database id of the parent menu item or null if it is the root */
		parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the parent nav menu item object. */
		parentId?: Maybe<Scalars["ID"]["output"]>;
		/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
		path?: Maybe<Scalars["String"]["output"]>;
		/** Target attribute for the menu item link. */
		target?: Maybe<Scalars["String"]["output"]>;
		/** Title attribute for the menu item link */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The uri of the resource the menu item links to */
		uri?: Maybe<Scalars["String"]["output"]>;
		/** URL or destination of the menu item. */
		url?: Maybe<Scalars["String"]["output"]>;
	};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
	/** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
	edges: Array<MenuItemConnectionEdge>;
	/** A list of connected MenuItem Nodes */
	nodes: Array<MenuItem>;
	/** Information about pagination in a connection. */
	pageInfo: MenuItemConnectionPageInfo;
};

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected MenuItem Node */
	node: MenuItem;
};

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
	/** The unique identifier stored in the database */
	databaseId: Scalars["Int"]["output"];
	/** The unique resource identifier path */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected MenuItemLinkable Node */
	node: MenuItemLinkable;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export type MenuItemNodeIdTypeEnum =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID";

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Agent | Category | Page | Post | Propertie | Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge &
	MenuConnectionEdge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Menu;
	};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection &
	MenuItemConnection & {
		/** Edges for the MenuItemToMenuItemConnection connection */
		edges: Array<MenuItemToMenuItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MenuItem>;
		/** Information about pagination in a connection. */
		pageInfo: MenuItemToMenuItemConnectionPageInfo;
	};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge &
	MenuItemConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: MenuItem;
	};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
	/** The database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** The menu location for the menu being queried */
	location?: InputMaybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the parent menu object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge &
	MenuItemLinkableConnectionEdge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: MenuItemLinkable;
	};

/** Registered menu locations */
export type MenuLocationEnum =
	/** Empty menu location */
	"EMPTY";

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export type MenuNodeIdTypeEnum =
	/** Identify a menu node by the Database ID. */
	| "DATABASE_ID"
	/** Identify a menu node by the (hashed) Global ID. */
	| "ID"
	/** Identify a menu node by the slug of menu location to which it is assigned */
	| "LOCATION"
	/** Identify a menu node by its name */
	| "NAME"
	/** Identify a menu node by its slug */
	| "SLUG";

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection &
	MenuItemConnection & {
		/** Edges for the MenuToMenuItemConnection connection */
		edges: Array<MenuToMenuItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MenuItem>;
		/** Information about pagination in a connection. */
		pageInfo: MenuToMenuItemConnectionPageInfo;
	};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge &
	MenuItemConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: MenuItem;
	};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
	/** The database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** The menu location for the menu being queried */
	location?: InputMaybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the parent menu object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** The MimeType of the object */
export type MimeTypeEnum =
	/** application/java mime type. */
	| "APPLICATION_JAVA"
	/** application/msword mime type. */
	| "APPLICATION_MSWORD"
	/** application/octet-stream mime type. */
	| "APPLICATION_OCTET_STREAM"
	/** application/onenote mime type. */
	| "APPLICATION_ONENOTE"
	/** application/oxps mime type. */
	| "APPLICATION_OXPS"
	/** application/pdf mime type. */
	| "APPLICATION_PDF"
	/** application/rar mime type. */
	| "APPLICATION_RAR"
	/** application/rtf mime type. */
	| "APPLICATION_RTF"
	/** application/ttaf+xml mime type. */
	| "APPLICATION_TTAF_XML"
	/** application/vnd.apple.keynote mime type. */
	| "APPLICATION_VND_APPLE_KEYNOTE"
	/** application/vnd.apple.numbers mime type. */
	| "APPLICATION_VND_APPLE_NUMBERS"
	/** application/vnd.apple.pages mime type. */
	| "APPLICATION_VND_APPLE_PAGES"
	/** application/vnd.ms-access mime type. */
	| "APPLICATION_VND_MS_ACCESS"
	/** application/vnd.ms-excel mime type. */
	| "APPLICATION_VND_MS_EXCEL"
	/** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12"
	/** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12"
	/** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12"
	/** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12"
	/** application/vnd.ms-powerpoint mime type. */
	| "APPLICATION_VND_MS_POWERPOINT"
	/** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12"
	/** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12"
	/** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12"
	/** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12"
	/** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12"
	/** application/vnd.ms-project mime type. */
	| "APPLICATION_VND_MS_PROJECT"
	/** application/vnd.ms-word.document.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12"
	/** application/vnd.ms-word.template.macroEnabled.12 mime type. */
	| "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12"
	/** application/vnd.ms-write mime type. */
	| "APPLICATION_VND_MS_WRITE"
	/** application/vnd.ms-xpsdocument mime type. */
	| "APPLICATION_VND_MS_XPSDOCUMENT"
	/** application/vnd.oasis.opendocument.chart mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART"
	/** application/vnd.oasis.opendocument.database mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE"
	/** application/vnd.oasis.opendocument.formula mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA"
	/** application/vnd.oasis.opendocument.graphics mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS"
	/** application/vnd.oasis.opendocument.presentation mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION"
	/** application/vnd.oasis.opendocument.spreadsheet mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET"
	/** application/vnd.oasis.opendocument.text mime type. */
	| "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT"
	/** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION"
	/** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE"
	/** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW"
	/** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE"
	/** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET"
	/** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE"
	/** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"
	/** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
	| "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE"
	/** application/wordperfect mime type. */
	| "APPLICATION_WORDPERFECT"
	/** application/x-7z-compressed mime type. */
	| "APPLICATION_X_7Z_COMPRESSED"
	/** application/x-gzip mime type. */
	| "APPLICATION_X_GZIP"
	/** application/x-tar mime type. */
	| "APPLICATION_X_TAR"
	/** application/zip mime type. */
	| "APPLICATION_ZIP"
	/** audio/aac mime type. */
	| "AUDIO_AAC"
	/** audio/flac mime type. */
	| "AUDIO_FLAC"
	/** audio/midi mime type. */
	| "AUDIO_MIDI"
	/** audio/mpeg mime type. */
	| "AUDIO_MPEG"
	/** audio/ogg mime type. */
	| "AUDIO_OGG"
	/** audio/wav mime type. */
	| "AUDIO_WAV"
	/** audio/x-matroska mime type. */
	| "AUDIO_X_MATROSKA"
	/** audio/x-ms-wax mime type. */
	| "AUDIO_X_MS_WAX"
	/** audio/x-ms-wma mime type. */
	| "AUDIO_X_MS_WMA"
	/** audio/x-realaudio mime type. */
	| "AUDIO_X_REALAUDIO"
	/** image/bmp mime type. */
	| "IMAGE_BMP"
	/** image/gif mime type. */
	| "IMAGE_GIF"
	/** image/heic mime type. */
	| "IMAGE_HEIC"
	/** image/jpeg mime type. */
	| "IMAGE_JPEG"
	/** image/png mime type. */
	| "IMAGE_PNG"
	/** image/tiff mime type. */
	| "IMAGE_TIFF"
	/** image/webp mime type. */
	| "IMAGE_WEBP"
	/** image/x-icon mime type. */
	| "IMAGE_X_ICON"
	/** text/calendar mime type. */
	| "TEXT_CALENDAR"
	/** text/css mime type. */
	| "TEXT_CSS"
	/** text/csv mime type. */
	| "TEXT_CSV"
	/** text/plain mime type. */
	| "TEXT_PLAIN"
	/** text/richtext mime type. */
	| "TEXT_RICHTEXT"
	/** text/tab-separated-values mime type. */
	| "TEXT_TAB_SEPARATED_VALUES"
	/** text/vtt mime type. */
	| "TEXT_VTT"
	/** video/3gpp mime type. */
	| "VIDEO_3GPP"
	/** video/3gpp2 mime type. */
	| "VIDEO_3GPP2"
	/** video/avi mime type. */
	| "VIDEO_AVI"
	/** video/divx mime type. */
	| "VIDEO_DIVX"
	/** video/mp4 mime type. */
	| "VIDEO_MP4"
	/** video/mpeg mime type. */
	| "VIDEO_MPEG"
	/** video/ogg mime type. */
	| "VIDEO_OGG"
	/** video/quicktime mime type. */
	| "VIDEO_QUICKTIME"
	/** video/webm mime type. */
	| "VIDEO_WEBM"
	/** video/x-flv mime type. */
	| "VIDEO_X_FLV"
	/** video/x-matroska mime type. */
	| "VIDEO_X_MATROSKA"
	/** video/x-ms-asf mime type. */
	| "VIDEO_X_MS_ASF"
	/** video/x-ms-wm mime type. */
	| "VIDEO_X_MS_WM"
	/** video/x-ms-wmv mime type. */
	| "VIDEO_X_MS_WMV"
	/** video/x-ms-wmx mime type. */
	| "VIDEO_X_MS_WMX";

/** A Gravity Forms multiselect field. */
export type MultiSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** An array of field values. */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** MultiSelectFieldChoice choice values. */
export type MultiSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms name field. */
export type NameField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithNameSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSubLabelPlacementSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Name field value. */
		nameValues?: Maybe<NameFieldValue>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** NameFieldChoice choice values. */
export type NameFieldChoice = GfFieldChoice &
	GfFieldChoiceWithNameSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** Input fields for name field. */
export type NameFieldInput = {
	/** First name. */
	first?: InputMaybe<Scalars["String"]["input"]>;
	/** Last name. */
	last?: InputMaybe<Scalars["String"]["input"]>;
	/** Middle name. */
	middle?: InputMaybe<Scalars["String"]["input"]>;
	/** Prefix, such as Mr., Mrs. etc. */
	prefix?: InputMaybe<Scalars["String"]["input"]>;
	/** Suffix, such as Sr., Jr. etc. */
	suffix?: InputMaybe<Scalars["String"]["input"]>;
};

/** The individual properties for each element of the Name value field. */
export type NameFieldValue = {
	/** First name. */
	first?: Maybe<Scalars["String"]["output"]>;
	/** Last name. */
	last?: Maybe<Scalars["String"]["output"]>;
	/** Middle name. */
	middle?: Maybe<Scalars["String"]["output"]>;
	/** Prefix, such as Mr., Mrs. etc. */
	prefix?: Maybe<Scalars["String"]["output"]>;
	/** Suffix, such as Sr., Jr. etc. */
	suffix?: Maybe<Scalars["String"]["output"]>;
};

/** NameInputProperty input values. */
export type NameInputProperty = GfFieldInput &
	GfFieldInputWithNameSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The nested NameFieldChoice choice. */
		choices?: Maybe<Array<Maybe<NameFieldChoice>>>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** Whether or not this field should be hidden. */
		isHidden?: Maybe<Scalars["Boolean"]["output"]>;
		/** Key used to identify this input. */
		key?: Maybe<Scalars["String"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** An object with an ID */
export type Node = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
	/** Connection between the NodeWithAuthor type and the User type */
	author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
	/** The database identifier of the author of the node */
	authorDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** The globally unique identifier of the author of the node */
	authorId?: Maybe<Scalars["ID"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge &
	OneToOneConnection &
	UserConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: User;
	};

/** A node that can have comments associated with it */
export type NodeWithComments = {
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: Maybe<Scalars["Int"]["output"]>;
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
	/** The content of the post. */
	content?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
	/** The excerpt of the post. */
	excerpt?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: Maybe<Scalars["ID"]["output"]>;
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge &
	MediaItemConnectionEdge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: MediaItem;
	};

/** A node that can have a Gravity Forms form assigned to it. */
export type NodeWithForm = {
	/** The form object of the node. */
	form?: Maybe<GfForm>;
	/** The database identifier of the form of the node. */
	formDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** The globally unique identifier of the form of the node. */
	formId?: Maybe<Scalars["ID"]["output"]>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars["Int"]["output"]>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** True if the node is a revision of another node */
	isRevision?: Maybe<Scalars["Boolean"]["output"]>;
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge &
	OneToOneConnection & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: ContentNode;
	};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** The template assigned to the node */
	template?: Maybe<ContentTemplate>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: Maybe<Scalars["String"]["output"]>;
};

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
	/** The globally unique ID for the object */
	id: Scalars["ID"]["output"];
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?: Maybe<Scalars["String"]["output"]>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

/** A Gravity Forms number field. */
export type NumberField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithCalculationSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithNumberFormatSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRangeSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The formula used for the number field. */
		calculationFormula?: Maybe<Scalars["String"]["output"]>;
		/** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
		calculationRounding?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Indicates whether the number field is a calculation. */
		isCalculation?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the format allowed for the number field. */
		numberFormat?: Maybe<NumberFieldFormatEnum>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
		rangeMax?: Maybe<Scalars["Float"]["output"]>;
		/** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
		rangeMin?: Maybe<Scalars["Float"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The format allowed for the number field. . */
export type NumberFieldFormatEnum =
	/** Currency format. */
	| "CURRENCY"
	/** Decimal-comma format (e.g. 9.999,99). */
	| "DECIMAL_COMMA"
	/** Decimal-dot format (e.g. 9,999.99). */
	| "DECIMAL_DOT";

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected node */
	node: Node;
};

/** A Gravity Forms checkbox option field. */
export type OptionCheckboxField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSelectAllChoicesSetting &
	OptionField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Checkbox field value. */
		checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the \&quot;select all\&quot; choice should be displayed. */
		hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** OptionCheckboxFieldChoice choice values. */
export type OptionCheckboxFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	OptionFieldChoice & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** OptionCheckboxInputProperty input values. */
export type OptionCheckboxInputProperty = GfFieldInput &
	GfFieldInputWithSelectAllChoicesSetting & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms option field. */
export type OptionField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/** Contains the message that is displayed for fields that fail validation. */
	errorMessage?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
	hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
	/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
	isRequired?: Maybe<Scalars["Boolean"]["output"]>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
	/** The id of the product field to which the field is associated. */
	productField?: Maybe<Scalars["Int"]["output"]>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** OptionFieldChoice choice values. */
export type OptionFieldChoice = {
	/** The price associated with the choice. */
	formattedPrice?: Maybe<Scalars["String"]["output"]>;
	/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
	isSelected?: Maybe<Scalars["Boolean"]["output"]>;
	/** The price associated with the choice. */
	price?: Maybe<Scalars["Float"]["output"]>;
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms radio option field. */
export type OptionRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	GfFieldWithRulesSetting &
	OptionField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** OptionRadioFieldChoice choice values. */
export type OptionRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting &
	OptionFieldChoice & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select option field. */
export type OptionSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	OptionField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** OptionSelectFieldChoice choice values. */
export type OptionSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	OptionFieldChoice & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** The cardinality of the connection order */
export type OrderEnum =
	/** Sort the query result set in an ascending order */
	| "ASC"
	/** Sort the query result set in a descending order */
	| "DESC";

/** The page type */
export type Page = ContentNode &
	DatabaseIdentifier &
	HierarchicalContentNode &
	HierarchicalNode &
	MenuItemLinkable &
	Node &
	NodeWithAuthor &
	NodeWithComments &
	NodeWithContentEditor &
	NodeWithFeaturedImage &
	NodeWithPageAttributes &
	NodeWithRevisions &
	NodeWithTemplate &
	NodeWithTitle &
	Previewable &
	UniformResourceIdentifiable & {
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
		/** Connection between the NodeWithAuthor type and the User type */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars["ID"]["output"]>;
		/** Connection between the HierarchicalContentNode type and the ContentNode type */
		children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Page type and the Comment type */
		comments?: Maybe<PageToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The name of the Content Type the node belongs to */
		contentTypeName: Scalars["String"]["output"];
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Post publishing date. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars["String"]["output"]>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars["ID"]["output"]>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the page object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether this page is set to the static front page. */
		isFrontPage: Scalars["Boolean"]["output"];
		/** Whether this page is set to the blog posts page. */
		isPostsPage: Scalars["Boolean"]["output"];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether this page is set to the privacy page. */
		isPrivacyPage: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars["String"]["output"]>;
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
		menuOrder?: Maybe<Scalars["Int"]["output"]>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars["String"]["output"]>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		pageId: Scalars["Int"]["output"];
		/** The parent of the node. The parent object can be of various types */
		parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
		/** Database id of the parent node */
		parentDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the parent node. */
		parentId?: Maybe<Scalars["ID"]["output"]>;
		/** Connection between the Page type and the page type */
		preview?: Maybe<PageToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the Page type and the page type */
		revisions?: Maybe<PageToRevisionConnection>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the object */
		status?: Maybe<Scalars["String"]["output"]>;
		/** The template assigned to a node of content */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The page type */
export type PageAncestorsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};

/** The page type */
export type PageChildrenArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** The page type */
export type PageCommentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The page type */
export type PageRevisionsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type PageTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to page Nodes */
export type PageConnection = {
	/** A list of edges (relational context) between RootQuery and connected page Nodes */
	edges: Array<PageConnectionEdge>;
	/** A list of connected page Nodes */
	nodes: Array<Page>;
	/** Information about pagination in a connection. */
	pageInfo: PageConnectionPageInfo;
};

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected page Node */
	node: Page;
};

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms page field. */
export type PageField = FormField &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithNextButtonSetting &
	GfFieldWithPreviousButton & {
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** An array containing the the individual properties for the &quot;Next&quot; button. */
		nextButton?: Maybe<FormButton>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** An array containing the the individual properties for the &quot;Previous&quot; button. */
		previousButton?: Maybe<FormButton>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PageIdType =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the URI. */
	| "URI";

/** Information about pagination in a connection. */
export type PageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the PageToCommentConnection connection */
		edges: Array<PageToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: PageToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge &
	OneToOneConnection &
	PageConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Page;
	};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection &
	PageConnection & {
		/** Edges for the PageToRevisionConnection connection */
		edges: Array<PageToRevisionConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Page>;
		/** Information about pagination in a connection. */
		pageInfo: PageToRevisionConnectionPageInfo;
	};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge &
	PageConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Page;
	};

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** A Gravity Forms password field. */
export type PasswordField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPasswordSetting &
	GfFieldWithPasswordStrengthSetting &
	GfFieldWithPasswordVisibilitySetting &
	GfFieldWithPersonalData &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	GfFieldWithSubLabelPlacementSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Indicates whether the field displays the password strength indicator. */
		hasPasswordStrengthIndicator?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the Password visibility toggle should be enabled for this field. */
		hasPasswordVisibilityToggle?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Indicates how strong the password should be. */
		minPasswordStrength?: Maybe<PasswordFieldMinStrengthEnum>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Indicates how strong the password should be. */
export type PasswordFieldMinStrengthEnum =
	/** The password strength must be "bad" or better. */
	| "BAD"
	/** The password strength must be "good" or better. */
	| "GOOD"
	/** The password strength must be "short" or better. */
	| "SHORT"
	/** The password strength must be "strong". */
	| "STRONG";

/** PasswordInputProperty input values. */
export type PasswordInputProperty = GfFieldInput &
	GfFieldInputWithPasswordSetting & {
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** Whether or not this field should be hidden. */
		isHidden?: Maybe<Scalars["Boolean"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms phone field. */
export type PhoneField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPhoneFormatSetting &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines the allowed format for phones. If the phone value does not conform with the specified format, the field will fail validation. */
		phoneFormat?: Maybe<PhoneFieldFormatEnum>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Tthe allowed format for phone numbers. */
export type PhoneFieldFormatEnum =
	/** International phone number format. */
	| "INTERNATIONAL"
	/** Standard phone number format. */
	| "STANDARD";

/** An plugin object */
export type Plugin = Node & {
	/** Name of the plugin author(s), may also be a company name. */
	author?: Maybe<Scalars["String"]["output"]>;
	/** URI for the related author(s)/company website. */
	authorUri?: Maybe<Scalars["String"]["output"]>;
	/** Description of the plugin. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique identifier of the plugin object. */
	id: Scalars["ID"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Display name of the plugin. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Plugin path. */
	path?: Maybe<Scalars["String"]["output"]>;
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri?: Maybe<Scalars["String"]["output"]>;
	/** Current version of the plugin. */
	version?: Maybe<Scalars["String"]["output"]>;
};

/** Connection to Plugin Nodes */
export type PluginConnection = {
	/** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
	edges: Array<PluginConnectionEdge>;
	/** A list of connected Plugin Nodes */
	nodes: Array<Plugin>;
	/** Information about pagination in a connection. */
	pageInfo: PluginConnectionPageInfo;
};

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Plugin Node */
	node: Plugin;
};

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The status of the WordPress plugin. */
export type PluginStatusEnum =
	/** The plugin is currently active. */
	| "ACTIVE"
	/** The plugin is a drop-in plugin. */
	| "DROP_IN"
	/** The plugin is currently inactive. */
	| "INACTIVE"
	/** The plugin is a must-use plugin. */
	| "MUST_USE"
	/** The plugin is technically active but was paused while loading. */
	| "PAUSED"
	/** The plugin was active recently. */
	| "RECENTLY_ACTIVE"
	/** The plugin has an upgrade available. */
	| "UPGRADE";

/** The post type */
export type Post = ContentNode &
	DatabaseIdentifier &
	MenuItemLinkable &
	Node &
	NodeWithAuthor &
	NodeWithComments &
	NodeWithContentEditor &
	NodeWithExcerpt &
	NodeWithFeaturedImage &
	NodeWithRevisions &
	NodeWithTemplate &
	NodeWithTitle &
	NodeWithTrackbacks &
	Previewable &
	UniformResourceIdentifiable & {
		/** Connection between the NodeWithAuthor type and the User type */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/** The database identifier of the author of the node */
		authorDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** The globally unique identifier of the author of the node */
		authorId?: Maybe<Scalars["ID"]["output"]>;
		/** Connection between the Post type and the category type */
		categories?: Maybe<PostToCategoryConnection>;
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
		commentCount?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the comments are open or closed for this particular post. */
		commentStatus?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Post type and the Comment type */
		comments?: Maybe<PostToCommentConnection>;
		/** The content of the post. */
		content?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The name of the Content Type the node belongs to */
		contentTypeName: Scalars["String"]["output"];
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Post publishing date. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars["String"]["output"]>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** The excerpt of the post. */
		excerpt?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars["ID"]["output"]>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the post object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** True if the node is a revision of another node */
		isRevision?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether this page is sticky */
		isSticky: Scalars["Boolean"]["output"];
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars["String"]["output"]>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars["String"]["output"]>;
		/** Whether the pings are open or closed for this particular post. */
		pingStatus?: Maybe<Scalars["String"]["output"]>;
		/** URLs that have been pinged. */
		pinged?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Connection between the Post type and the postFormat type */
		postFormats?: Maybe<PostToPostFormatConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		postId: Scalars["Int"]["output"];
		/** Connection between the Post type and the post type */
		preview?: Maybe<PostToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
		/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/** Connection between the Post type and the post type */
		revisions?: Maybe<PostToRevisionConnection>;
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the object */
		status?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Post type and the tag type */
		tags?: Maybe<PostToTagConnection>;
		/** The template assigned to the node */
		template?: Maybe<ContentTemplate>;
		/** Connection between the Post type and the TermNode type */
		terms?: Maybe<PostToTermNodeConnection>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** URLs queued to be pinged. */
		toPing?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The post type */
export type PostCategoriesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostCommentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The post type */
export type PostExcerptArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostPostFormatsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};

/** The post type */
export type PostRevisionsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type PostTagsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};

/** The post type */
export type PostTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The input list of items to set. */
	nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** A Gravity Forms checkbox post_category field. */
export type PostCategoryCheckboxField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCategoryCheckboxSetting &
	GfFieldWithPostCategoryInitialItemSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSelectAllChoicesSetting &
	GfFieldWithSizeSetting &
	PostCategoryField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Checkbox field value. */
		checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The dropdown placeholder for the field. */
		dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
		hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the \&quot;select all\&quot; choice should be displayed. */
		hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCategoryCheckboxFieldChoice choice values. */
export type PostCategoryCheckboxFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	PostCategoryFieldChoice & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** PostCategoryCheckboxInputProperty input values. */
export type PostCategoryCheckboxInputProperty = GfFieldInput &
	GfFieldInputWithSelectAllChoicesSetting & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms post_category field. */
export type PostCategoryField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** The choices for the field. */
	choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/** The dropdown placeholder for the field. */
	dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
	/** Contains the message that is displayed for fields that fail validation. */
	errorMessage?: Maybe<Scalars["String"]["output"]>;
	/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
	hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
	/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
	hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** The inputs for the field. */
	inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
	/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
	isRequired?: Maybe<Scalars["Boolean"]["output"]>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** Determines if the field allows duplicate submissions. */
	shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
	/** Determines the size of the field when displayed on the page. */
	size?: Maybe<FormFieldSizeEnum>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** PostCategoryFieldChoice choice values. */
export type PostCategoryFieldChoice = {
	/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
	isSelected?: Maybe<Scalars["Boolean"]["output"]>;
	/** The text to be displayed to the user when displaying this choice. */
	text?: Maybe<Scalars["String"]["output"]>;
	/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
	value?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms multiselect post_category field. */
export type PostCategoryMultiSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCategoryCheckboxSetting &
	GfFieldWithPostCategoryInitialItemSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCategoryField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The dropdown placeholder for the field. */
		dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
		hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** An array of field values. */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCategoryMultiSelectFieldChoice choice values. */
export type PostCategoryMultiSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	PostCategoryFieldChoice & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms radio post_category field. */
export type PostCategoryRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCategoryCheckboxSetting &
	GfFieldWithPostCategoryInitialItemSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCategoryField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The dropdown placeholder for the field. */
		dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
		hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCategoryRadioFieldChoice choice values. */
export type PostCategoryRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting &
	PostCategoryFieldChoice & {
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select post_category field. */
export type PostCategorySelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCategoryCheckboxSetting &
	GfFieldWithPostCategoryInitialItemSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCategoryField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The dropdown placeholder for the field. */
		dropdownPlaceholder?: Maybe<Scalars["String"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if all categories should be displayed on the Post Category drop down. If this property is true (display all categories), the Post Category drop down will display the categories hierarchically. */
		hasAllCategories?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCategorySelectFieldChoice choice values. */
export type PostCategorySelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	PostCategoryFieldChoice & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection to post Nodes */
export type PostConnection = {
	/** A list of edges (relational context) between RootQuery and connected post Nodes */
	edges: Array<PostConnectionEdge>;
	/** A list of connected post Nodes */
	nodes: Array<Post>;
	/** Information about pagination in a connection. */
	pageInfo: PostConnectionPageInfo;
};

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected post Node */
	node: Post;
};

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms post_content field. */
export type PostContentField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRichTextEditorSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Indicates whether the field uses the rich text editor interface. */
		hasRichTextEditor?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms checkbox post_custom_field field. */
export type PostCustomCheckboxField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSelectAllChoicesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Checkbox field value. */
		checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the \&quot;select all\&quot; choice should be displayed. */
		hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomCheckboxFieldChoice choice values. */
export type PostCustomCheckboxFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** PostCustomCheckboxInputProperty input values. */
export type PostCustomCheckboxInputProperty = GfFieldInput &
	GfFieldInputWithSelectAllChoicesSetting & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms date post_custom_field field. */
export type PostCustomDateField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDateFormatSetting &
	GfFieldWithDateInputTypeSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	GfFieldWithSubLabelPlacementSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines how the date field displays it’s calendar icon. */
		calendarIconType?: Maybe<FormFieldCalendarIconTypeEnum>;
		/** Contains the URL to the custom calendar icon. Only applicable when calendarIconType is set to custom. */
		calendarIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Determines how the date is displayed. */
		dateFormat?: Maybe<DateFieldFormatEnum>;
		/** The type of date field to display. */
		dateType?: Maybe<DateFieldTypeEnum>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomDateInputProperty input values. */
export type PostCustomDateInputProperty = GfFieldInput &
	GfFieldInputWithDateFormatSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms email post_custom_field field. */
export type PostCustomEmailField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	GfFieldWithSubLabelPlacementSetting &
	GfGfFieldWithEmailConfirmationSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines whether the Confirm Email field is active. */
		hasEmailConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomEmailInputProperty input values. */
export type PostCustomEmailInputProperty = GfFieldInput &
	GfFieldInputWithEmailConfirmationSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms post_custom_field field. */
export type PostCustomField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/** Contains the message that is displayed for fields that fail validation. */
	errorMessage?: Maybe<Scalars["String"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
	isRequired?: Maybe<Scalars["Boolean"]["output"]>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** The post meta key to which the value should be assigned. */
	postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field allows duplicate submissions. */
	shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
	/** Determines the size of the field when displayed on the page. */
	size?: Maybe<FormFieldSizeEnum>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms fileupload post_custom_field field. */
export type PostCustomFileuploadField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithFileExtensionsSetting &
	GfFieldWithFileSizeSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMultipleFilesSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** A comma-delimited list of the file extensions which may be uploaded. */
		allowedExtensions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Indicates whether multiple files may be uploaded. */
		canAcceptMultipleFiles?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** File upload value */
		fileUploadValues?: Maybe<Array<Maybe<FileUploadFieldValue>>>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The maximum size (in MB) an uploaded file may be . */
		maxFileSize?: Maybe<Scalars["Int"]["output"]>;
		/** When the field is set to allow multiple files to be uploaded, this property is available to set a limit on how many may be uploaded. */
		maxFiles?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/**
		 * An array of field values.
		 * @deprecated Use `fileUploadValues` instead.
		 */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms hidden post_custom_field field. */
export type PostCustomHiddenField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms list post_custom_field field. */
export type PostCustomListField = FormField &
	GfFieldWithAddIconUrlSetting &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithColumnsSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDeleteIconUrlSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxRowsSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** The URL of the image to be used for the add row button. */
		addIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** The URL of the image to be used for the delete row button. */
		deleteIconUrl?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field should use multiple columns. Default is false. */
		hasColumns?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** List field value. */
		listValues?: Maybe<Array<Maybe<ListFieldValue>>>;
		/** The maximum number of rows the user can add to the field. */
		maxRows?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomListFieldChoice choice values. */
export type PostCustomListFieldChoice = GfFieldChoice &
	GfFieldChoiceWithColumnsSetting & {
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms multiselect post_custom_field field. */
export type PostCustomMultiSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** An array of field values. */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomMultiSelectFieldChoice choice values. */
export type PostCustomMultiSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms number post_custom_field field. */
export type PostCustomNumberField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithCalculationSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithNumberFormatSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRangeSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The formula used for the number field. */
		calculationFormula?: Maybe<Scalars["String"]["output"]>;
		/** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
		calculationRounding?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Indicates whether the number field is a calculation. */
		isCalculation?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the format allowed for the number field. */
		numberFormat?: Maybe<NumberFieldFormatEnum>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
		rangeMax?: Maybe<Scalars["Float"]["output"]>;
		/** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
		rangeMin?: Maybe<Scalars["Float"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms phone post_custom_field field. */
export type PostCustomPhoneField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPhoneFormatSetting &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines the allowed format for phones. If the phone value does not conform with the specified format, the field will fail validation. */
		phoneFormat?: Maybe<PhoneFieldFormatEnum>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms radio post_custom_field field. */
export type PostCustomRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomRadioFieldChoice choice values. */
export type PostCustomRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting & {
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select post_custom_field field. */
export type PostCustomSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomSelectFieldChoice choice values. */
export type PostCustomSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms textarea post_custom_field field. */
export type PostCustomTextAreaField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRichTextEditorSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Indicates whether the field uses the rich text editor interface. */
		hasRichTextEditor?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms text post_custom_field field. */
export type PostCustomTextField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputMaskSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPasswordFieldSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the field has an input mask. */
		hasInputMask?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The pattern used for the input mask. */
		inputMaskValue?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if a text field input tag should be created with a &quot;password&quot; type. */
		isPasswordInput?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms time post_custom_field field. */
export type PostCustomTimeField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	GfFieldWithSubLabelPlacementSetting &
	GfFieldWithTimeFormatSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** Determines how the time is displayed. */
		timeFormat?: Maybe<TimeFieldFormatEnum>;
		/** Time field value. */
		timeValues?: Maybe<TimeFieldValue>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostCustomTimeInputProperty input values. */
export type PostCustomTimeInputProperty = GfFieldInput &
	GfFieldInputWithTimeFormatSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms website post_custom_field field. */
export type PostCustomWebsiteField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPostCustomFieldSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostCustomField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The post meta key to which the value should be assigned. */
		postMetaFieldName?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms post_excerpt field. */
export type PostExcerptField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The postFormat type */
export type PostFormat = DatabaseIdentifier &
	Node &
	TermNode &
	UniformResourceIdentifiable & {
		/** Connection between the PostFormat type and the ContentNode type */
		contentNodes?: Maybe<PostFormatToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars["Int"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The description of the object */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The unique resource identifier path */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The link to the term */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		postFormatId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the PostFormat type and the post type */
		posts?: Maybe<PostFormatToPostConnection>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the PostFormat type and the Taxonomy type */
		taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
		/** The name of the taxonomy that the object is associated with */
		taxonomyName?: Maybe<Scalars["String"]["output"]>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars["Int"]["output"]>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars["Int"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The postFormat type */
export type PostFormatContentNodesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The postFormat type */
export type PostFormatPostsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
	/** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
	edges: Array<PostFormatConnectionEdge>;
	/** A list of connected postFormat Nodes */
	nodes: Array<PostFormat>;
	/** Information about pagination in a connection. */
	pageInfo: PostFormatConnectionPageInfo;
};

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected postFormat Node */
	node: PostFormat;
};

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PostFormatIdType =
	/** The Database ID for the node */
	| "DATABASE_ID"
	/** The hashed Global ID */
	| "ID"
	/** The name of the node */
	| "NAME"
	/** Url friendly name of the node */
	| "SLUG"
	/** The URI for the node */
	| "URI";

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the PostFormatToContentNodeConnection connection */
		edges: Array<PostFormatToContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: PostFormatToContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection &
	PostConnection & {
		/** Edges for the PostFormatToPostConnection connection */
		edges: Array<PostFormatToPostConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: PostFormatToPostConnectionPageInfo;
	};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge &
	OneToOneConnection &
	TaxonomyConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Taxonomy;
	};

/** List of possible post formats. */
export type PostFormatTypeEnum =
	/** A standard post format. */
	"STANDARD";

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PostIdType =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	| "SLUG"
	/** Identify a resource by the URI. */
	| "URI";

/** A Gravity Forms post_image field. */
export type PostImageField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithFileExtensionsSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPostImageFeaturedImageSetting &
	GfFieldWithPostImageSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSubLabelPlacementSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** A comma-delimited list of the file extensions which may be uploaded. */
		allowedExtensions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Controls the visibility of the alt metadata for Post Image fields. */
		hasAlt?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the caption metadata for Post Image fields. */
		hasCaption?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the description metadata for Post Image fields. */
		hasDescription?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the title metadata for Post Image fields. */
		hasTitle?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Image field value. */
		imageValues?: Maybe<ImageFieldValue>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Whether the image field should be used to set the post&#039;s Featured Image */
		isFeaturedImage?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The format of post field data. */
export type PostObjectFieldFormatEnum =
	/** Provide the field value directly from database. Null on unauthenticated requests. */
	| "RAW"
	/** Provide the field value as rendered by WordPress. Default. */
	| "RENDERED";

/** The column to use when filtering by date */
export type PostObjectsConnectionDateColumnEnum =
	/** The date the comment was created in local time. */
	| "DATE"
	/** The most recent modification date of the comment. */
	| "MODIFIED";

/** Field to order the connection by */
export type PostObjectsConnectionOrderbyEnum =
	/** Order by author */
	| "AUTHOR"
	/** Order by the number of comments it has acquired */
	| "COMMENT_COUNT"
	/** Order by publish date */
	| "DATE"
	/** Preserve the ID order given in the IN array */
	| "IN"
	/** Order by the menu order value */
	| "MENU_ORDER"
	/** Order by last modified date */
	| "MODIFIED"
	/** Preserve slug order given in the NAME_IN array */
	| "NAME_IN"
	/** Order by parent ID */
	| "PARENT"
	/** Order by slug */
	| "SLUG"
	/** Order by title */
	| "TITLE";

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
	/** The field to order the connection by */
	field: PostObjectsConnectionOrderbyEnum;
	/** Possible directions in which to order a list of items */
	order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The input list of items to set. */
	nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The status of the object. */
export type PostStatusEnum =
	/** Objects with the acf-disabled status */
	| "ACF_DISABLED"
	/** Objects with the auto-draft status */
	| "AUTO_DRAFT"
	/** Objects with the draft status */
	| "DRAFT"
	/** Objects with the future status */
	| "FUTURE"
	/** Objects with the inherit status */
	| "INHERIT"
	/** Objects with the pending status */
	| "PENDING"
	/** Objects with the private status */
	| "PRIVATE"
	/** Objects with the publish status */
	| "PUBLISH"
	/** Objects with the request-completed status */
	| "REQUEST_COMPLETED"
	/** Objects with the request-confirmed status */
	| "REQUEST_CONFIRMED"
	/** Objects with the request-failed status */
	| "REQUEST_FAILED"
	/** Objects with the request-pending status */
	| "REQUEST_PENDING"
	/** Objects with the trash status */
	| "TRASH";

/** A Gravity Forms checkbox post_tags field. */
export type PostTagsCheckboxField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSelectAllChoicesSetting &
	GfFieldWithSizeSetting &
	PostTagsField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Checkbox field value. */
		checkboxValues?: Maybe<Array<Maybe<CheckboxFieldValue>>>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the \&quot;select all\&quot; choice should be displayed. */
		hasSelectAll?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostTagsCheckboxFieldChoice choice values. */
export type PostTagsCheckboxFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** PostTagsCheckboxInputProperty input values. */
export type PostTagsCheckboxInputProperty = GfFieldInput &
	GfFieldInputWithSelectAllChoicesSetting & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms post_tags field. */
export type PostTagsField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/** Contains the message that is displayed for fields that fail validation. */
	errorMessage?: Maybe<Scalars["String"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
	isRequired?: Maybe<Scalars["Boolean"]["output"]>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
	/** Determines the size of the field when displayed on the page. */
	size?: Maybe<FormFieldSizeEnum>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
	/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The input list of items to set. */
	nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** A Gravity Forms multiselect post_tags field. */
export type PostTagsMultiSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostTagsField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** An array of field values. */
		values?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostTagsMultiSelectFieldChoice choice values. */
export type PostTagsMultiSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
	/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** A Gravity Forms radio post_tags field. */
export type PostTagsRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostTagsField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostTagsRadioFieldChoice choice values. */
export type PostTagsRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting & {
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select post_tags field. */
export type PostTagsSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostTagsField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** PostTagsSelectFieldChoice choice values. */
export type PostTagsSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms text post_tags field. */
export type PostTagsTextField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputMaskSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPasswordFieldSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	PostTagsField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the field has an input mask. */
		hasInputMask?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The pattern used for the input mask. */
		inputMaskValue?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if a text field input tag should be created with a &quot;password&quot; type. */
		isPasswordInput?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms post_title field. */
export type PostTitleField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection &
	Connection & {
		/** Edges for the PostToCategoryConnection connection */
		edges: Array<PostToCategoryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Category>;
		/** Information about pagination in a connection. */
		pageInfo: PostToCategoryConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Category;
	};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the PostToCommentConnection connection */
		edges: Array<PostToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: PostToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection &
	PostFormatConnection & {
		/** Edges for the PostToPostFormatConnection connection */
		edges: Array<PostToPostFormatConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<PostFormat>;
		/** Information about pagination in a connection. */
		pageInfo: PostToPostFormatConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge &
	PostFormatConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: PostFormat;
	};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo &
	PostFormatConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge &
	OneToOneConnection &
	PostConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Post;
	};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection &
	PostConnection & {
		/** Edges for the PostToRevisionConnection connection */
		edges: Array<PostToRevisionConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: PostToRevisionConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection &
	TagConnection & {
		/** Edges for the PostToTagConnection connection */
		edges: Array<PostToTagConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Tag>;
		/** Information about pagination in a connection. */
		pageInfo: PostToTagConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge &
	TagConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Tag;
	};

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo &
	TagConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection &
	TermNodeConnection & {
		/** Edges for the PostToTermNodeConnection connection */
		edges: Array<PostToTermNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<TermNode>;
		/** Information about pagination in a connection. */
		pageInfo: PostToTermNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge &
	TermNodeConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: TermNode;
	};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo &
	TermNodeConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
	/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew?: Maybe<Scalars["String"]["output"]>;
	/** Label for adding a new singular item. */
	addNewItem?: Maybe<Scalars["String"]["output"]>;
	/** Label to signify all items in a submenu link. */
	allItems?: Maybe<Scalars["String"]["output"]>;
	/** Label for archives in nav menus */
	archives?: Maybe<Scalars["String"]["output"]>;
	/** Label for the attributes meta box. */
	attributes?: Maybe<Scalars["String"]["output"]>;
	/** Label for editing a singular item. */
	editItem?: Maybe<Scalars["String"]["output"]>;
	/** Label for the Featured Image meta box title. */
	featuredImage?: Maybe<Scalars["String"]["output"]>;
	/** Label for the table views hidden heading. */
	filterItemsList?: Maybe<Scalars["String"]["output"]>;
	/** Label for the media frame button. */
	insertIntoItem?: Maybe<Scalars["String"]["output"]>;
	/** Label for the table hidden heading. */
	itemsList?: Maybe<Scalars["String"]["output"]>;
	/** Label for the table pagination hidden heading. */
	itemsListNavigation?: Maybe<Scalars["String"]["output"]>;
	/** Label for the menu name. */
	menuName?: Maybe<Scalars["String"]["output"]>;
	/** General name for the post type, usually plural. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Label for the new item page title. */
	newItem?: Maybe<Scalars["String"]["output"]>;
	/** Label used when no items are found. */
	notFound?: Maybe<Scalars["String"]["output"]>;
	/** Label used when no items are in the trash. */
	notFoundInTrash?: Maybe<Scalars["String"]["output"]>;
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon?: Maybe<Scalars["String"]["output"]>;
	/** Label for removing the featured image. */
	removeFeaturedImage?: Maybe<Scalars["String"]["output"]>;
	/** Label for searching plural items. */
	searchItems?: Maybe<Scalars["String"]["output"]>;
	/** Label for setting the featured image. */
	setFeaturedImage?: Maybe<Scalars["String"]["output"]>;
	/** Name for one object of this post type. */
	singularName?: Maybe<Scalars["String"]["output"]>;
	/** Label for the media frame filter. */
	uploadedToThisItem?: Maybe<Scalars["String"]["output"]>;
	/** Label in the media frame for using a featured image. */
	useFeaturedImage?: Maybe<Scalars["String"]["output"]>;
	/** Label for viewing a singular item. */
	viewItem?: Maybe<Scalars["String"]["output"]>;
	/** Label for viewing post type archives. */
	viewItems?: Maybe<Scalars["String"]["output"]>;
};

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
	/** Whether the object is a node in the preview state */
	isPreview?: Maybe<Scalars["Boolean"]["output"]>;
	/** The database id of the preview node */
	previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
	/** Whether the object is a node in the preview state */
	previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
};

/** A Gravity Forms calculation calculation field. */
export type ProductCalculationField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithCalculationSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDisableQuantitySetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The formula used for the number field. */
		calculationFormula?: Maybe<Scalars["String"]["output"]>;
		/** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
		calculationRounding?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the field has the quantity property enabled. */
		hasQuantity?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Indicates whether the number field is a calculation. */
		isCalculation?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Whether the quantity property should be disabled for this field.
		 * @deprecated Use `hasQuantity` instead
		 */
		isQuantityDisabled?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms product field. */
export type ProductField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** Product field values. */
	productValues?: Maybe<ProductFieldValue>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** Input fields for Product field. */
export type ProductFieldInput = {
	/** Product price. */
	price?: InputMaybe<Scalars["Float"]["input"]>;
	/** Product quantity. */
	quantity?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The individual properties for each element of the Product value field. */
export type ProductFieldValue = {
	/** The product name. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The product price. */
	price?: Maybe<Scalars["String"]["output"]>;
	/** The product quantity. */
	quantity?: Maybe<Scalars["Float"]["output"]>;
};

/** A Gravity Forms hiddenproduct hiddenproduct field. */
export type ProductHiddenField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithBasePriceSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price of the product, prefixed by the currency. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The price of the product. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms price product field. */
export type ProductPriceField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms radio product field. */
export type ProductRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ProductRadioFieldChoice choice values. */
export type ProductRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select product field. */
export type ProductSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ProductSelectFieldChoice choice values. */
export type ProductSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms singleproduct singleproduct field. */
export type ProductSingleField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithBasePriceSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDisableQuantitySetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSingleProductInputs &
	ProductField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** The price of the product, prefixed by the currency. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Whether the field has the quantity property enabled. */
		hasQuantity?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/**
		 * Whether the quantity property should be disabled for this field.
		 * @deprecated Use `hasQuantity` instead
		 */
		isQuantityDisabled?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The price of the product. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** Product field values. */
		productValues?: Maybe<ProductFieldValue>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ProductSingleInputProperty input values. */
export type ProductSingleInputProperty = GfFieldInput &
	GfFieldInputWithSingleProductInputs & {
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		name?: Maybe<Scalars["String"]["output"]>;
	};

/** The propertie type */
export type Propertie = ContentNode &
	DatabaseIdentifier &
	MenuItemLinkable &
	Node &
	NodeWithFeaturedImage &
	NodeWithTemplate &
	NodeWithTitle &
	Previewable &
	UniformResourceIdentifiable &
	WithAcfPropertieFields & {
		/** Connection between the ContentNode type and the ContentType type */
		contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
		/** The name of the Content Type the node belongs to */
		contentTypeName: Scalars["String"]["output"];
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** Post publishing date. */
		date?: Maybe<Scalars["String"]["output"]>;
		/** The publishing date set in GMT. */
		dateGmt?: Maybe<Scalars["String"]["output"]>;
		/** The desired slug of the post */
		desiredSlug?: Maybe<Scalars["String"]["output"]>;
		/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/** The RSS enclosure for the object */
		enclosure?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the ContentNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/** Connection between the ContentNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/** The database identifier for the featured image node assigned to the content node */
		featuredImageDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Globally unique ID of the featured image assigned to the node */
		featuredImageId?: Maybe<Scalars["ID"]["output"]>;
		/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
		guid?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier of the propertie object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is a node in the preview state */
		isPreview?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The user that most recently edited the node */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/** The permalink of the post */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
		modified?: Maybe<Scalars["String"]["output"]>;
		/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
		modifiedGmt?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Propertie type and the propertie type */
		preview?: Maybe<PropertieToPreviewConnectionEdge>;
		/** The database id of the preview node */
		previewRevisionDatabaseId?: Maybe<Scalars["Int"]["output"]>;
		/** Whether the object is a node in the preview state */
		previewRevisionId?: Maybe<Scalars["ID"]["output"]>;
		/** Fields of the PropertieFields ACF Field Group */
		propertieFields?: Maybe<PropertieFields>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		propertieId: Scalars["Int"]["output"];
		/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** The current status of the object */
		status?: Maybe<Scalars["String"]["output"]>;
		/** The template assigned to the node */
		template?: Maybe<ContentTemplate>;
		/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
		title?: Maybe<Scalars["String"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The propertie type */
export type PropertieEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The propertie type */
export type PropertieEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The propertie type */
export type PropertieTitleArgs = {
	format?: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to propertie Nodes */
export type PropertieConnection = {
	/** A list of edges (relational context) between RootQuery and connected propertie Nodes */
	edges: Array<PropertieConnectionEdge>;
	/** A list of connected propertie Nodes */
	nodes: Array<Propertie>;
	/** Information about pagination in a connection. */
	pageInfo: PropertieConnectionPageInfo;
};

/** Edge between a Node and a connected propertie */
export type PropertieConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected propertie Node */
	node: Propertie;
};

/** Page Info on the connected PropertieConnectionEdge */
export type PropertieConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The &quot;PropertieFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PropertieFields = AcfFieldGroup &
	AcfFieldGroupFields &
	PropertieFields_Fields & {
		/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		area?: Maybe<Scalars["Float"]["output"]>;
		/** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		buyOrLease?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/**
		 * The name of the field group
		 * @deprecated Use __typename instead
		 */
		fieldGroupName?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;gallery&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		images?: Maybe<AcfMediaItemConnection>;
		/** Field of the &quot;google_map&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		map?: Maybe<AcfGoogleMap>;
		/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		numberOfBeds?: Maybe<Scalars["Float"]["output"]>;
		/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		numberOfRooms?: Maybe<Scalars["Float"]["output"]>;
		/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		propertyDescription?: Maybe<Scalars["String"]["output"]>;
		/** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		relationWithProperties?: Maybe<AcfContentNodeConnection>;
		/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
		typeOfDevelopment?: Maybe<Scalars["String"]["output"]>;
	};

/** The &quot;PropertieFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PropertieFieldsImagesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The &quot;PropertieFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type PropertieFieldsRelationWithPropertiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Interface representing fields of the ACF &quot;PropertieFields&quot; Field Group */
export type PropertieFields_Fields = {
	/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	area?: Maybe<Scalars["Float"]["output"]>;
	/** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	buyOrLease?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/**
	 * The name of the field group
	 * @deprecated Use __typename instead
	 */
	fieldGroupName?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;gallery&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	images?: Maybe<AcfMediaItemConnection>;
	/** Field of the &quot;google_map&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	map?: Maybe<AcfGoogleMap>;
	/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	numberOfBeds?: Maybe<Scalars["Float"]["output"]>;
	/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	numberOfRooms?: Maybe<Scalars["Float"]["output"]>;
	/** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	price?: Maybe<Scalars["Float"]["output"]>;
	/** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	propertyDescription?: Maybe<Scalars["String"]["output"]>;
	/** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	relationWithProperties?: Maybe<AcfContentNodeConnection>;
	/** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PropertieFields&quot; Field Group */
	typeOfDevelopment?: Maybe<Scalars["String"]["output"]>;
};

/** Interface representing fields of the ACF &quot;PropertieFields&quot; Field Group */
export type PropertieFields_FieldsImagesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Interface representing fields of the ACF &quot;PropertieFields&quot; Field Group */
export type PropertieFields_FieldsRelationWithPropertiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PropertieIdType =
	/** Identify a resource by the Database ID. */
	| "DATABASE_ID"
	/** Identify a resource by the (hashed) Global ID. */
	| "ID"
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	| "SLUG"
	/** Identify a resource by the URI. */
	| "URI";

/** Connection between the Propertie type and the propertie type */
export type PropertieToPreviewConnectionEdge = Edge &
	OneToOneConnection &
	PropertieConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Propertie;
	};

/** A Gravity Forms quantity field. */
export type QuantityField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
	defaultValue?: Maybe<Scalars["String"]["output"]>;
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
	placeholder?: Maybe<Scalars["String"]["output"]>;
	/** The id of the product field to which the field is associated. */
	productField?: Maybe<Scalars["Int"]["output"]>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms hidden quantity field. */
export type QuantityHiddenField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	QuantityField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms number quantity field. */
export type QuantityNumberField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithCalculationSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithNumberFormatSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	GfFieldWithRangeSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	QuantityField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The formula used for the number field. */
		calculationFormula?: Maybe<Scalars["String"]["output"]>;
		/** Specifies to how many decimal places the number should be rounded. This is available when `isCalculation` is true, but will return null if the number format is `CURRENCY` or if the calculation is set to `Do not round`. */
		calculationRounding?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Indicates whether the number field is a calculation. */
		isCalculation?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the format allowed for the number field. */
		numberFormat?: Maybe<NumberFieldFormatEnum>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** Maximum allowed value for a number field. Values higher than the number specified by this property will cause the field to fail validation. */
		rangeMax?: Maybe<Scalars["Float"]["output"]>;
		/** Minimum allowed value for a number field. Values lower than the number specified by this property will cause the field to fail validation. */
		rangeMin?: Maybe<Scalars["Float"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms select quantity field. */
export type QuantitySelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithProductFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	QuantityField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** The id of the product field to which the field is associated. */
		productField?: Maybe<Scalars["Int"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** QuantitySelectFieldChoice choice values. */
export type QuantitySelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms radio field. */
export type RadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** RadioFieldChoice choice values. */
export type RadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting & {
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** The reading setting type */
export type ReadingSettings = {
	/** The ID of the page that should display the latest posts */
	pageForPosts?: Maybe<Scalars["Int"]["output"]>;
	/** The ID of the page that should be displayed on the front page */
	pageOnFront?: Maybe<Scalars["Int"]["output"]>;
	/** Blog pages show at most. */
	postsPerPage?: Maybe<Scalars["Int"]["output"]>;
	/** What to show on the front page */
	showOnFront?: Maybe<Scalars["String"]["output"]>;
};

/** Determines which version of reCAPTCHA v2 will be used.  */
export type RecaptchaTypeEnum =
	/** A checkbox reCAPTCHA type. */
	| "CHECKBOX"
	/** An invisible reCAPTCHA type. */
	| "INVISIBLE";

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
	/** User's AOL IM account. */
	aim?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing content about the user. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing the user's email address. */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** 	The user's first name. */
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	/** User's Jabber account. */
	jabber?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's last name. */
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	/** User's locale. */
	locale?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains the plain text password for the user. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: InputMaybe<Scalars["String"]["input"]>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains the user's username. */
	username: Scalars["String"]["input"];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** User's Yahoo IM account. */
	yim?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The User object mutation type. */
	user?: Maybe<User>;
};

/** The logical relation between each item in the array when there are more than one. */
export type RelationEnum =
	/** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
	| "AND"
	/** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
	| "OR";

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Password reset key */
	key?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's login (username). */
	login?: InputMaybe<Scalars["String"]["input"]>;
	/** The new password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The User object mutation type. */
	user?: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the comment to be restored */
	id: Scalars["ID"]["input"];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The restored comment object */
	comment?: Maybe<Comment>;
	/** The ID of the restored comment */
	restoredId?: Maybe<Scalars["ID"]["output"]>;
};

/** The root mutation */
export type RootMutation = {
	/** The createAgent mutation */
	createAgent?: Maybe<CreateAgentPayload>;
	/** The createCategory mutation */
	createCategory?: Maybe<CreateCategoryPayload>;
	/** The createComment mutation */
	createComment?: Maybe<CreateCommentPayload>;
	/** The createMediaItem mutation */
	createMediaItem?: Maybe<CreateMediaItemPayload>;
	/** The createPage mutation */
	createPage?: Maybe<CreatePagePayload>;
	/** The createPost mutation */
	createPost?: Maybe<CreatePostPayload>;
	/** The createPostFormat mutation */
	createPostFormat?: Maybe<CreatePostFormatPayload>;
	/** The createPropertie mutation */
	createPropertie?: Maybe<CreatePropertiePayload>;
	/** The createTag mutation */
	createTag?: Maybe<CreateTagPayload>;
	/** The createUser mutation */
	createUser?: Maybe<CreateUserPayload>;
	/** The deleteAgent mutation */
	deleteAgent?: Maybe<DeleteAgentPayload>;
	/** The deleteCategory mutation */
	deleteCategory?: Maybe<DeleteCategoryPayload>;
	/** The deleteComment mutation */
	deleteComment?: Maybe<DeleteCommentPayload>;
	/** The deleteGfDraftEntry mutation */
	deleteGfDraftEntry?: Maybe<DeleteGfDraftEntryPayload>;
	/** The deleteGfEntry mutation */
	deleteGfEntry?: Maybe<DeleteGfEntryPayload>;
	/** The deleteMediaItem mutation */
	deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
	/** The deletePage mutation */
	deletePage?: Maybe<DeletePagePayload>;
	/** The deletePost mutation */
	deletePost?: Maybe<DeletePostPayload>;
	/** The deletePostFormat mutation */
	deletePostFormat?: Maybe<DeletePostFormatPayload>;
	/** The deletePropertie mutation */
	deletePropertie?: Maybe<DeletePropertiePayload>;
	/** The deleteTag mutation */
	deleteTag?: Maybe<DeleteTagPayload>;
	/** The deleteUser mutation */
	deleteUser?: Maybe<DeleteUserPayload>;
	/** Increase the count. */
	increaseCount?: Maybe<Scalars["Int"]["output"]>;
	/** The registerUser mutation */
	registerUser?: Maybe<RegisterUserPayload>;
	/** The resetUserPassword mutation */
	resetUserPassword?: Maybe<ResetUserPasswordPayload>;
	/** The restoreComment mutation */
	restoreComment?: Maybe<RestoreCommentPayload>;
	/** Send password reset email to user */
	sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
	/** The submitGfDraftEntry mutation */
	submitGfDraftEntry?: Maybe<SubmitGfDraftEntryPayload>;
	/** The submitGfForm mutation */
	submitGfForm?: Maybe<SubmitGfFormPayload>;
	/** The updateAgent mutation */
	updateAgent?: Maybe<UpdateAgentPayload>;
	/** The updateCategory mutation */
	updateCategory?: Maybe<UpdateCategoryPayload>;
	/** The updateComment mutation */
	updateComment?: Maybe<UpdateCommentPayload>;
	/** The updateGfDraftEntry mutation */
	updateGfDraftEntry?: Maybe<UpdateGfDraftEntryPayload>;
	/** The updateGfEntry mutation */
	updateGfEntry?: Maybe<UpdateGfEntryPayload>;
	/** The updateMediaItem mutation */
	updateMediaItem?: Maybe<UpdateMediaItemPayload>;
	/** The updatePage mutation */
	updatePage?: Maybe<UpdatePagePayload>;
	/** The updatePost mutation */
	updatePost?: Maybe<UpdatePostPayload>;
	/** The updatePostFormat mutation */
	updatePostFormat?: Maybe<UpdatePostFormatPayload>;
	/** The updatePropertie mutation */
	updatePropertie?: Maybe<UpdatePropertiePayload>;
	/** The updateSettings mutation */
	updateSettings?: Maybe<UpdateSettingsPayload>;
	/** The updateTag mutation */
	updateTag?: Maybe<UpdateTagPayload>;
	/** The updateUser mutation */
	updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation */
export type RootMutationCreateAgentArgs = {
	input: CreateAgentInput;
};

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
	input: CreateCategoryInput;
};

/** The root mutation */
export type RootMutationCreateCommentArgs = {
	input: CreateCommentInput;
};

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
	input: CreateMediaItemInput;
};

/** The root mutation */
export type RootMutationCreatePageArgs = {
	input: CreatePageInput;
};

/** The root mutation */
export type RootMutationCreatePostArgs = {
	input: CreatePostInput;
};

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
	input: CreatePostFormatInput;
};

/** The root mutation */
export type RootMutationCreatePropertieArgs = {
	input: CreatePropertieInput;
};

/** The root mutation */
export type RootMutationCreateTagArgs = {
	input: CreateTagInput;
};

/** The root mutation */
export type RootMutationCreateUserArgs = {
	input: CreateUserInput;
};

/** The root mutation */
export type RootMutationDeleteAgentArgs = {
	input: DeleteAgentInput;
};

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
	input: DeleteCategoryInput;
};

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
	input: DeleteCommentInput;
};

/** The root mutation */
export type RootMutationDeleteGfDraftEntryArgs = {
	input: DeleteGfDraftEntryInput;
};

/** The root mutation */
export type RootMutationDeleteGfEntryArgs = {
	input: DeleteGfEntryInput;
};

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
	input: DeleteMediaItemInput;
};

/** The root mutation */
export type RootMutationDeletePageArgs = {
	input: DeletePageInput;
};

/** The root mutation */
export type RootMutationDeletePostArgs = {
	input: DeletePostInput;
};

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
	input: DeletePostFormatInput;
};

/** The root mutation */
export type RootMutationDeletePropertieArgs = {
	input: DeletePropertieInput;
};

/** The root mutation */
export type RootMutationDeleteTagArgs = {
	input: DeleteTagInput;
};

/** The root mutation */
export type RootMutationDeleteUserArgs = {
	input: DeleteUserInput;
};

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
	count?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root mutation */
export type RootMutationRegisterUserArgs = {
	input: RegisterUserInput;
};

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
	input: ResetUserPasswordInput;
};

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
	input: RestoreCommentInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
	input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationSubmitGfDraftEntryArgs = {
	input: SubmitGfDraftEntryInput;
};

/** The root mutation */
export type RootMutationSubmitGfFormArgs = {
	input: SubmitGfFormInput;
};

/** The root mutation */
export type RootMutationUpdateAgentArgs = {
	input: UpdateAgentInput;
};

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
	input: UpdateCategoryInput;
};

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
	input: UpdateCommentInput;
};

/** The root mutation */
export type RootMutationUpdateGfDraftEntryArgs = {
	input: UpdateGfDraftEntryInput;
};

/** The root mutation */
export type RootMutationUpdateGfEntryArgs = {
	input: UpdateGfEntryInput;
};

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
	input: UpdateMediaItemInput;
};

/** The root mutation */
export type RootMutationUpdatePageArgs = {
	input: UpdatePageInput;
};

/** The root mutation */
export type RootMutationUpdatePostArgs = {
	input: UpdatePostInput;
};

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
	input: UpdatePostFormatInput;
};

/** The root mutation */
export type RootMutationUpdatePropertieArgs = {
	input: UpdatePropertieInput;
};

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
	input: UpdateSettingsInput;
};

/** The root mutation */
export type RootMutationUpdateTagArgs = {
	input: UpdateTagInput;
};

/** The root mutation */
export type RootMutationUpdateUserArgs = {
	input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
	/** An object of the agent Type. Agencie w naszej bazie */
	agent?: Maybe<Agent>;
	/**
	 * A agent object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	agentBy?: Maybe<Agent>;
	/** Connection between the RootQuery type and the agent type */
	agents?: Maybe<RootQueryToAgentConnection>;
	/** Entry point to get all settings for the site */
	allSettings?: Maybe<Settings>;
	/** Connection between the RootQuery type and the category type */
	categories?: Maybe<RootQueryToCategoryConnection>;
	/** A 0bject */
	category?: Maybe<Category>;
	/** Returns a Comment */
	comment?: Maybe<Comment>;
	/** Connection between the RootQuery type and the Comment type */
	comments?: Maybe<RootQueryToCommentConnection>;
	/** A node used to manage content */
	contentNode?: Maybe<ContentNode>;
	/** Connection between the RootQuery type and the ContentNode type */
	contentNodes?: Maybe<RootQueryToContentNodeConnection>;
	/** Fetch a Content Type node by unique Identifier */
	contentType?: Maybe<ContentType>;
	/** Connection between the RootQuery type and the ContentType type */
	contentTypes?: Maybe<RootQueryToContentTypeConnection>;
	/** Fields of the &#039;DiscussionSettings&#039; settings group */
	discussionSettings?: Maybe<DiscussionSettings>;
	/** Fields of the &#039;GeneralSettings&#039; settings group */
	generalSettings?: Maybe<GeneralSettings>;
	/** Get a Gravity Forms entry. */
	gfDraftEntry?: Maybe<GfDraftEntry>;
	/** Connection between the RootQuery type and the GfEntry type */
	gfEntries?: Maybe<RootQueryToGfEntryConnection>;
	/** Get a Gravity Forms entry. */
	gfEntry?: Maybe<GfEntry>;
	/** Get a Gravity Forms form. */
	gfForm?: Maybe<GfForm>;
	/** Connection between the RootQuery type and the GfForm type */
	gfForms?: Maybe<RootQueryToGfFormConnection>;
	/** Gravity Forms settings. */
	gfSettings?: Maybe<GfSettings>;
	/** Connection between the RootQuery type and the GfSubmittedEntry type */
	gfSubmittedEntries?: Maybe<RootQueryToGfSubmittedEntryConnection>;
	/** Get a Gravity Forms entry. */
	gfSubmittedEntry?: Maybe<GfSubmittedEntry>;
	/** An object of the mediaItem Type.  */
	mediaItem?: Maybe<MediaItem>;
	/**
	 * A mediaItem object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	mediaItemBy?: Maybe<MediaItem>;
	/** Connection between the RootQuery type and the mediaItem type */
	mediaItems?: Maybe<RootQueryToMediaItemConnection>;
	/** A WordPress navigation menu */
	menu?: Maybe<Menu>;
	/** A WordPress navigation menu item */
	menuItem?: Maybe<MenuItem>;
	/** Connection between the RootQuery type and the MenuItem type */
	menuItems?: Maybe<RootQueryToMenuItemConnection>;
	/** Connection between the RootQuery type and the Menu type */
	menus?: Maybe<RootQueryToMenuConnection>;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	/** Fetches an object given its Unique Resource Identifier */
	nodeByUri?: Maybe<UniformResourceIdentifiable>;
	/** An object of the page Type.  */
	page?: Maybe<Page>;
	/**
	 * A page object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	pageBy?: Maybe<Page>;
	/** Connection between the RootQuery type and the page type */
	pages?: Maybe<RootQueryToPageConnection>;
	/** A WordPress plugin */
	plugin?: Maybe<Plugin>;
	/** Connection between the RootQuery type and the Plugin type */
	plugins?: Maybe<RootQueryToPluginConnection>;
	/** An object of the post Type.  */
	post?: Maybe<Post>;
	/**
	 * A post object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	postBy?: Maybe<Post>;
	/** A 0bject */
	postFormat?: Maybe<PostFormat>;
	/** Connection between the RootQuery type and the postFormat type */
	postFormats?: Maybe<RootQueryToPostFormatConnection>;
	/** Connection between the RootQuery type and the post type */
	posts?: Maybe<RootQueryToPostConnection>;
	/** An object of the propertie Type. Model danych dla nieruchomości */
	propertie?: Maybe<Propertie>;
	/**
	 * A propertie object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	propertieBy?: Maybe<Propertie>;
	/** Connection between the RootQuery type and the propertie type */
	properties?: Maybe<RootQueryToPropertieConnection>;
	/** Fields of the &#039;ReadingSettings&#039; settings group */
	readingSettings?: Maybe<ReadingSettings>;
	/** Connection between the RootQuery type and the EnqueuedScript type */
	registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
	registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
	/** Connection between the RootQuery type and the ContentNode type */
	revisions?: Maybe<RootQueryToRevisionsConnection>;
	/** A 0bject */
	tag?: Maybe<Tag>;
	/** Connection between the RootQuery type and the tag type */
	tags?: Maybe<RootQueryToTagConnection>;
	/** Connection between the RootQuery type and the Taxonomy type */
	taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
	/** Fetch a Taxonomy node by unique Identifier */
	taxonomy?: Maybe<Taxonomy>;
	/** A node in a taxonomy used to group and relate content nodes */
	termNode?: Maybe<TermNode>;
	/** Connection between the RootQuery type and the TermNode type */
	terms?: Maybe<RootQueryToTermNodeConnection>;
	/** A Theme object */
	theme?: Maybe<Theme>;
	/** Connection between the RootQuery type and the Theme type */
	themes?: Maybe<RootQueryToThemeConnection>;
	/** Returns a user */
	user?: Maybe<User>;
	/** Returns a user role */
	userRole?: Maybe<UserRole>;
	/** Connection between the RootQuery type and the UserRole type */
	userRoles?: Maybe<RootQueryToUserRoleConnection>;
	/** Connection between the RootQuery type and the User type */
	users?: Maybe<RootQueryToUserConnection>;
	/** Returns the current user */
	viewer?: Maybe<User>;
	/** Fields of the &#039;WritingSettings&#039; settings group */
	writingSettings?: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryAgentArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<AgentIdType>;
};

/** The root entry point into the Graph */
export type RootQueryAgentByArgs = {
	agentId?: InputMaybe<Scalars["Int"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryAgentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToAgentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<CategoryIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<CommentNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	contentType?: InputMaybe<ContentTypeEnum>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<ContentNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<ContentTypeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryGfDraftEntryArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<DraftEntryIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryGfEntriesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToGfEntryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryGfEntryArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<EntryIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryGfFormArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<FormIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryGfFormsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToGfFormConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryGfSubmittedEntriesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToGfSubmittedEntryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryGfSubmittedEntryArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<SubmittedEntryIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<MediaItemIdType>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	mediaItemId?: InputMaybe<Scalars["Int"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<MenuNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<MenuItemNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
	uri: Scalars["String"]["input"];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<PageIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	pageId?: InputMaybe<Scalars["Int"]["input"]>;
	uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
	id: Scalars["ID"]["input"];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<PostIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	postId?: InputMaybe<Scalars["Int"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<PostFormatIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPropertieArgs = {
	asPreview?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<PropertieIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPropertieByArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	propertieId?: InputMaybe<Scalars["Int"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	uri?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryPropertiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToPropertieConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<TagIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<TaxonomyIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<TermNodeIdTypeEnum>;
	taxonomy?: InputMaybe<TaxonomyEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
	id: Scalars["ID"]["input"];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
	id: Scalars["ID"]["input"];
	idType?: InputMaybe<UserNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
	id: Scalars["ID"]["input"];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the agent type */
export type RootQueryToAgentConnection = AgentConnection &
	Connection & {
		/** Edges for the RootQueryToAgentConnection connection */
		edges: Array<RootQueryToAgentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Agent>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToAgentConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToAgentConnectionEdge = AgentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Agent;
	};

/** Page Info on the &quot;RootQueryToAgentConnection&quot; */
export type RootQueryToAgentConnectionPageInfo = AgentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToAgentConnection connection */
export type RootQueryToAgentConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection &
	Connection & {
		/** Edges for the RootQueryToCategoryConnection connection */
		edges: Array<RootQueryToCategoryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Category>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToCategoryConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Category;
	};

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the RootQueryToCommentConnection connection */
		edges: Array<RootQueryToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the RootQueryToContentNodeConnection connection */
		edges: Array<RootQueryToContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection &
	ContentTypeConnection & {
		/** Edges for the RootQueryToContentTypeConnection connection */
		edges: Array<RootQueryToContentTypeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentType>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToContentTypeConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentType;
	};

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection &
	EnqueuedScriptConnection & {
		/** Edges for the RootQueryToEnqueuedScriptConnection connection */
		edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedScript>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge &
	EnqueuedScriptConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedScript;
	};

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection &
	EnqueuedStylesheetConnection & {
		/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
		edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedStylesheet>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge &
	EnqueuedStylesheetConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedStylesheet;
	};

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the RootQuery type and the GfEntry type */
export type RootQueryToGfEntryConnection = Connection &
	GfEntryConnection & {
		/** Edges for the RootQueryToGfEntryConnection connection */
		edges: Array<RootQueryToGfEntryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<GfEntry>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToGfEntryConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToGfEntryConnectionEdge = Edge &
	GfEntryConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: GfEntry;
	};

/** Page Info on the &quot;RootQueryToGfEntryConnection&quot; */
export type RootQueryToGfEntryConnectionPageInfo = GfEntryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToGfEntryConnection connection */
export type RootQueryToGfEntryConnectionWhereArgs = {
	/** Date filters to apply. */
	dateFilters?: InputMaybe<EntriesDateFiltersInput>;
	/** Entry status. Default is `SUBMITTED`. Currently no other types are supported. */
	entryType?: InputMaybe<EntryTypeEnum>;
	/** Field-specific filters to apply. */
	fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
	/** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
	fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
	/** Array of form IDs to limit the entries to. Exclude this argument to query all forms. */
	formIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** How to sort the entries. */
	orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
	/** Entry status. Default is "ACTIVE". */
	status?: InputMaybe<EntryStatusEnum>;
};

/** Connection between the RootQuery type and the GfForm type */
export type RootQueryToGfFormConnection = Connection &
	GfFormConnection & {
		/** Edges for the RootQueryToGfFormConnection connection */
		edges: Array<RootQueryToGfFormConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<GfForm>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToGfFormConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToGfFormConnectionEdge = Edge &
	GfFormConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: GfForm;
	};

/** Page Info on the &quot;RootQueryToGfFormConnection&quot; */
export type RootQueryToGfFormConnectionPageInfo = GfFormConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToGfFormConnection connection */
export type RootQueryToGfFormConnectionWhereArgs = {
	/** Array of form database IDs to return. Exclude this argument to query all forms. */
	formIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** How to sort the entries. */
	orderby?: InputMaybe<FormsConnectionOrderbyInput>;
	/** Status of the forms to get. */
	status?: InputMaybe<FormStatusEnum>;
};

/** Connection between the RootQuery type and the GfSubmittedEntry type */
export type RootQueryToGfSubmittedEntryConnection = Connection &
	GfSubmittedEntryConnection & {
		/** Edges for the RootQueryToGfSubmittedEntryConnection connection */
		edges: Array<RootQueryToGfSubmittedEntryConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<GfSubmittedEntry>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToGfSubmittedEntryConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToGfSubmittedEntryConnectionEdge = Edge &
	GfSubmittedEntryConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: GfSubmittedEntry;
	};

/** Page Info on the &quot;RootQueryToGfSubmittedEntryConnection&quot; */
export type RootQueryToGfSubmittedEntryConnectionPageInfo = GfSubmittedEntryConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToGfSubmittedEntryConnection connection */
export type RootQueryToGfSubmittedEntryConnectionWhereArgs = {
	/** Date filters to apply. */
	dateFilters?: InputMaybe<EntriesDateFiltersInput>;
	/** Field-specific filters to apply. */
	fieldFilters?: InputMaybe<Array<InputMaybe<EntriesFieldFiltersInput>>>;
	/** Whether to filter by ALL or ANY of the field filters. Default is ALL. */
	fieldFiltersMode?: InputMaybe<FieldFiltersModeEnum>;
	/** Array of form IDs to limit the entries to. Exclude this argument to query all forms. */
	formIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** How to sort the entries. */
	orderby?: InputMaybe<EntriesConnectionOrderbyInput>;
	/** Entry status. Default is "ACTIVE". */
	status?: InputMaybe<EntryStatusEnum>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection &
	MediaItemConnection & {
		/** Edges for the RootQueryToMediaItemConnection connection */
		edges: Array<RootQueryToMediaItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MediaItem>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToMediaItemConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge &
	MediaItemConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: MediaItem;
	};

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection &
	MenuConnection & {
		/** Edges for the RootQueryToMenuConnection connection */
		edges: Array<RootQueryToMenuConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Menu>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToMenuConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge &
	MenuConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Menu;
	};

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
	/** The database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** The menu location for the menu being queried */
	location?: InputMaybe<MenuLocationEnum>;
	/** The slug of the menu to query items for */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection &
	MenuItemConnection & {
		/** Edges for the RootQueryToMenuItemConnection connection */
		edges: Array<RootQueryToMenuItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MenuItem>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToMenuItemConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge &
	MenuItemConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: MenuItem;
	};

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
	/** The database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** The menu location for the menu being queried */
	location?: InputMaybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the parent menu object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection &
	PageConnection & {
		/** Edges for the RootQueryToPageConnection connection */
		edges: Array<RootQueryToPageConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Page>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToPageConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge &
	PageConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Page;
	};

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection &
	PluginConnection & {
		/** Edges for the RootQueryToPluginConnection connection */
		edges: Array<RootQueryToPluginConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Plugin>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToPluginConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge &
	PluginConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Plugin;
	};

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo &
	PluginConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
	/** Show plugin based on a keyword search. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve plugins where plugin status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
	/** Show plugins with a specific status. */
	status?: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection &
	PostConnection & {
		/** Edges for the RootQueryToPostConnection connection */
		edges: Array<RootQueryToPostConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToPostConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection &
	PostFormatConnection & {
		/** Edges for the RootQueryToPostFormatConnection connection */
		edges: Array<RootQueryToPostFormatConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<PostFormat>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToPostFormatConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge &
	PostFormatConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: PostFormat;
	};

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo &
	PostFormatConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the RootQuery type and the propertie type */
export type RootQueryToPropertieConnection = Connection &
	PropertieConnection & {
		/** Edges for the RootQueryToPropertieConnection connection */
		edges: Array<RootQueryToPropertieConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Propertie>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToPropertieConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToPropertieConnectionEdge = Edge &
	PropertieConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Propertie;
	};

/** Page Info on the &quot;RootQueryToPropertieConnection&quot; */
export type RootQueryToPropertieConnectionPageInfo = PageInfo &
	PropertieConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToPropertieConnection connection */
export type RootQueryToPropertieConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the RootQueryToRevisionsConnection connection */
		edges: Array<RootQueryToRevisionsConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToRevisionsConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection &
	TagConnection & {
		/** Edges for the RootQueryToTagConnection connection */
		edges: Array<RootQueryToTagConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Tag>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToTagConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge &
	TagConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Tag;
	};

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo &
	TagConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection &
	TaxonomyConnection & {
		/** Edges for the RootQueryToTaxonomyConnection connection */
		edges: Array<RootQueryToTaxonomyConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Taxonomy>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToTaxonomyConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge &
	TaxonomyConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Taxonomy;
	};

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo &
	TaxonomyConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection &
	TermNodeConnection & {
		/** Edges for the RootQueryToTermNodeConnection connection */
		edges: Array<RootQueryToTermNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<TermNode>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToTermNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge &
	TermNodeConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: TermNode;
	};

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo &
	TermNodeConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: InputMaybe<Scalars["String"]["input"]>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: InputMaybe<Scalars["Int"]["input"]>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Array of term ids to include. Default empty array. */
	include?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Direction the connection should be ordered in */
	order?: InputMaybe<OrderEnum>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomyId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection &
	ThemeConnection & {
		/** Edges for the RootQueryToThemeConnection connection */
		edges: Array<RootQueryToThemeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Theme>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToThemeConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge &
	ThemeConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Theme;
	};

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo &
	ThemeConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection &
	UserConnection & {
		/** Edges for the RootQueryToUserConnection connection */
		edges: Array<RootQueryToUserConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<User>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToUserConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge &
	UserConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: User;
	};

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo &
	UserConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
	/** Array of userIds to exclude. */
	exclude?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of userIds to include. */
	include?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** The user login. */
	login?: InputMaybe<Scalars["String"]["input"]>;
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The user nicename. */
	nicename?: InputMaybe<Scalars["String"]["input"]>;
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role?: InputMaybe<UserRoleEnum>;
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection &
	UserRoleConnection & {
		/** Edges for the RootQueryToUserRoleConnection connection */
		edges: Array<RootQueryToUserRoleConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<UserRole>;
		/** Information about pagination in a connection. */
		pageInfo: RootQueryToUserRoleConnectionPageInfo;
	};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge &
	UserRoleConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: UserRole;
	};

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo &
	UserRoleConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** The strategy to use when loading the script */
export type ScriptLoadingStrategyEnum =
	/** Use the script `async` attribute */
	| "ASYNC"
	/** Use the script `defer` attribute */
	| "DEFER";

/** A Gravity Forms section field. */
export type SectionField = FormField &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithLabelSetting & {
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms select field. */
export type SelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** SelectFieldChoice choice values. */
export type SelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains the user's username or email address. */
	username: Scalars["String"]["input"];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
	success?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * The user that the password reset email was sent to
	 * @deprecated This field will be removed in a future version of WPGraphQL
	 */
	user?: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultCommentStatus?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultPingStatus?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsDateFormat?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsDescription?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsEmail?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsLanguage?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the integer Settings Group */
	generalSettingsStartOfWeek?: Maybe<Scalars["Int"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsTimeFormat?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsTimezone?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsTitle?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the string Settings Group */
	generalSettingsUrl?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the integer Settings Group */
	readingSettingsPageForPosts?: Maybe<Scalars["Int"]["output"]>;
	/** Settings of the the integer Settings Group */
	readingSettingsPageOnFront?: Maybe<Scalars["Int"]["output"]>;
	/** Settings of the the integer Settings Group */
	readingSettingsPostsPerPage?: Maybe<Scalars["Int"]["output"]>;
	/** Settings of the the string Settings Group */
	readingSettingsShowOnFront?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the integer Settings Group */
	writingSettingsDefaultCategory?: Maybe<Scalars["Int"]["output"]>;
	/** Settings of the the string Settings Group */
	writingSettingsDefaultPostFormat?: Maybe<Scalars["String"]["output"]>;
	/** Settings of the the boolean Settings Group */
	writingSettingsUseSmilies?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A Gravity Forms shipping field. */
export type ShippingField = {
	/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
	adminLabel?: Maybe<Scalars["String"]["output"]>;
	/** Determines if the field’s value can be pre-populated dynamically. */
	canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
	/** Controls the visibility of the field based on values selected by the user. */
	conditionalLogic?: Maybe<ConditionalLogic>;
	/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
	cssClass?: Maybe<Scalars["String"]["output"]>;
	/** Field database ID. */
	databaseId: Scalars["Int"]["output"];
	/** Field description. */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The placement of the field description. */
	descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
	/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
	displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
	/**
	 * Field database ID.
	 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
	 */
	id: Scalars["Int"]["output"];
	/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
	inputName?: Maybe<Scalars["String"]["output"]>;
	/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
	inputType?: Maybe<FormFieldTypeEnum>;
	/** Field label that will be displayed on the form and on the admin pages. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The field label position. */
	labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
	/** The number of CSS grid columns the field should span. */
	layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The number of CSS grid columns the spacer field following this one should span. */
	layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
	/** The form page this field is located on. Default is 1. */
	pageNumber?: Maybe<Scalars["Int"]["output"]>;
	/** The form field-specifc policies for exporting and erasing personal data. */
	personalData?: Maybe<FormFieldDataPolicy>;
	/** The type of field to be displayed. */
	type?: Maybe<FormFieldTypeEnum>;
	/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
	value?: Maybe<Scalars["String"]["output"]>;
	/** Field visibility. */
	visibility?: Maybe<FormFieldVisibilityEnum>;
};

/** A Gravity Forms radio shipping field. */
export type ShippingRadioField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithOtherChoiceSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	ShippingField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** Indicates whether the &#039;Enable &quot;other&quot; choice&#039; option is checked in the editor. */
		hasOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ShippingRadioFieldChoice choice values. */
export type ShippingRadioFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting &
	GfFieldChoiceWithOtherChoiceSetting & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Indicates the radio button item is the “Other” choice. */
		isOtherChoice?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms select shipping field. */
export type ShippingSelectField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithChoices &
	GfFieldWithChoicesSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithEnhancedUiSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting &
	ShippingField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** The choices for the field. */
		choices?: Maybe<Array<Maybe<GfFieldChoice>>>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field (checkbox, select or radio) have choice values enabled, which allows the field to have choice values different from the labels that are displayed to the user. */
		hasChoiceValue?: Maybe<Scalars["Boolean"]["output"]>;
		/** When set to true, the &quot;Chosen&quot; jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. */
		hasEnhancedUI?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** ShippingSelectFieldChoice choice values. */
export type ShippingSelectFieldChoice = GfFieldChoice &
	GfFieldChoiceWithChoicesSetting & {
		/** The price associated with the choice. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/** Determines if this choice should be selected by default when displayed. The value true will select the choice, whereas false will display it unselected. */
		isSelected?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price associated with the choice. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The text to be displayed to the user when displaying this choice. */
		text?: Maybe<Scalars["String"]["output"]>;
		/** The value to be stored in the database when this choice is selected. Note: This property is only supported by the Drop Down and Post Category fields. Checkboxes and Radio fields will store the text property in the database regardless of the value property. */
		value?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms singleshipping singleshipping field. */
export type ShippingSingleField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithBasePriceSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	ShippingField & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** The price of the product, prefixed by the currency. */
		formattedPrice?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The price of the product. */
		price?: Maybe<Scalars["Float"]["output"]>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** The Confirmation object returned on submission. Null if the submission was not successful. */
export type SubmissionConfirmation = {
	/** Contains the confirmation message HTML to display. Only applicable when type is set to `MESSAGE`. */
	message?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the SubmissionConfirmation type and the Page type */
	page?: Maybe<SubmissionConfirmationToPageConnectionEdge>;
	/** Contains the Id of the WordPress page that the browser will be redirected to. Only applicable when type is set to `PAGE`. */
	pageId?: Maybe<Scalars["Int"]["output"]>;
	/** Contains the query string to be appended to the redirection url. Only applicable when type is set to `REDIRECT` or `PAGE` . */
	queryString?: Maybe<Scalars["String"]["output"]>;
	/** Determines the type of confirmation to be used. */
	type?: Maybe<SubmissionConfirmationTypeEnum>;
	/** The URL the submission should redirect to. Only applicable when type is set to `REDIRECT`. */
	url?: Maybe<Scalars["String"]["output"]>;
};

/** Connection between the SubmissionConfirmation type and the Page type */
export type SubmissionConfirmationToPageConnectionEdge = Edge &
	OneToOneConnection &
	PageConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Page;
	};

/** Type of confirmation returned by the submission. */
export type SubmissionConfirmationTypeEnum =
	/** A confirmation "message". */
	| "MESSAGE"
	/** A "redirect" to a given URL. */
	| "REDIRECT";

/** Entry meta input fields for submitting Gravity Forms forms. */
export type SubmitFormMetaInput = {
	/** ID of the user that submitted of the form if a logged in user submitted the form. */
	createdById?: InputMaybe<Scalars["Int"]["input"]>;
	/** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
	dateCreatedGmt?: InputMaybe<Scalars["String"]["input"]>;
	/** Client IP of user who submitted the form. */
	ip?: InputMaybe<Scalars["String"]["input"]>;
	/** Used to overwrite the sourceUrl the form was submitted from. */
	sourceUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** The name and version of both the browser and operating system from which the entry was submitted. */
	userAgent?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the submitGfDraftEntry mutation. */
export type SubmitGfDraftEntryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Either the global ID of the draft entry, or its resume token. */
	id: Scalars["ID"]["input"];
	/** The ID type for the draft entry. Defaults to `ID` . */
	idType?: InputMaybe<DraftEntryIdTypeEnum>;
};

/** The payload for the submitGfDraftEntry mutation. */
export type SubmitGfDraftEntryPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The form confirmation data. Null if the submission has `errors` */
	confirmation?: Maybe<SubmissionConfirmation>;
	/** The entry that was created. */
	entry?: Maybe<GfSubmittedEntry>;
	/** Field errors. */
	errors?: Maybe<Array<Maybe<FieldError>>>;
};

/** Input for the submitGfForm mutation. */
export type SubmitGfFormInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The entry meta associated with the submission. */
	entryMeta?: InputMaybe<SubmitFormMetaInput>;
	/** The field ids and their values. */
	fieldValues: Array<InputMaybe<FormFieldValuesInput>>;
	/** The form ID. Accepts either a global or Database ID. */
	id: Scalars["ID"]["input"];
	/** Set to `true` if submitting a draft entry. Defaults to `false`. */
	saveAsDraft?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Useful for multi-page forms to indicate which page of the form was just submitted. */
	sourcePage?: InputMaybe<Scalars["Int"]["input"]>;
	/** Useful for multi-page forms to indicate which page is to be loaded if the current page passes validation. */
	targetPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The payload for the submitGfForm mutation. */
export type SubmitGfFormPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The form confirmation data. Null if the submission has `errors` */
	confirmation?: Maybe<SubmissionConfirmation>;
	/** The entry that was created. */
	entry?: Maybe<GfEntry>;
	/** Field errors. */
	errors?: Maybe<Array<Maybe<FieldError>>>;
	/** Draft resume URL. Null if submitting an entry. If the &quot;Referer&quot; header is not included in the request, this will be an empty string. */
	resumeUrl?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. */
export type SubmittedEntryIdTypeEnum =
	/** The database ID assigned by Gravity Forms. Used by submitted entries. */
	| "DATABASE_ID"
	/** Unique global ID for the object. */
	| "ID";

/** The tag type */
export type Tag = DatabaseIdentifier &
	MenuItemLinkable &
	Node &
	TermNode &
	UniformResourceIdentifiable & {
		/** Connection between the Tag type and the ContentNode type */
		contentNodes?: Maybe<TagToContentNodeConnection>;
		/** The number of objects connected to the object */
		count?: Maybe<Scalars["Int"]["output"]>;
		/** The unique identifier stored in the database */
		databaseId: Scalars["Int"]["output"];
		/** The description of the object */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the TermNode type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/** Connection between the TermNode type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/** The unique resource identifier path */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** The link to the term */
		link?: Maybe<Scalars["String"]["output"]>;
		/** The human friendly name of the object. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the Tag type and the post type */
		posts?: Maybe<TagToPostConnection>;
		/** An alphanumeric identifier for the object unique to its type. */
		slug?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		tagId?: Maybe<Scalars["Int"]["output"]>;
		/** Connection between the Tag type and the Taxonomy type */
		taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
		/** The name of the taxonomy that the object is associated with */
		taxonomyName?: Maybe<Scalars["String"]["output"]>;
		/** The ID of the term group that this term object belongs to */
		termGroupId?: Maybe<Scalars["Int"]["output"]>;
		/** The taxonomy ID that the object is associated with */
		termTaxonomyId?: Maybe<Scalars["Int"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
	};

/** The tag type */
export type TagContentNodesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};

/** The tag type */
export type TagEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The tag type */
export type TagPostsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** Connection to tag Nodes */
export type TagConnection = {
	/** A list of edges (relational context) between RootQuery and connected tag Nodes */
	edges: Array<TagConnectionEdge>;
	/** A list of connected tag Nodes */
	nodes: Array<Tag>;
	/** Information about pagination in a connection. */
	pageInfo: TagConnectionPageInfo;
};

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected tag Node */
	node: Tag;
};

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type TagIdType =
	/** The Database ID for the node */
	| "DATABASE_ID"
	/** The hashed Global ID */
	| "ID"
	/** The name of the node */
	| "NAME"
	/** Url friendly name of the node */
	| "SLUG"
	/** The URI for the node */
	| "URI";

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the TagToContentNodeConnection connection */
		edges: Array<TagToContentNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: TagToContentNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection &
	PostConnection & {
		/** Edges for the TagToPostConnection connection */
		edges: Array<TagToPostConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: TagToPostConnectionPageInfo;
	};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge &
	OneToOneConnection &
	TaxonomyConnectionEdge & {
		/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The node of the connection, without the edges */
		node: Taxonomy;
	};

/** A taxonomy object */
export type Taxonomy = Node & {
	/** List of Content Types associated with the Taxonomy */
	connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
	/** List of Term Nodes associated with the Taxonomy */
	connectedTerms?: Maybe<TaxonomyToTermNodeConnection>;
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName?: Maybe<Scalars["String"]["output"]>;
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName?: Maybe<Scalars["String"]["output"]>;
	/** Whether the taxonomy is hierarchical */
	hierarchical?: Maybe<Scalars["Boolean"]["output"]>;
	/** The globally unique identifier of the taxonomy object. */
	id: Scalars["ID"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label?: Maybe<Scalars["String"]["output"]>;
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name?: Maybe<Scalars["String"]["output"]>;
	/** Whether the taxonomy is publicly queryable */
	public?: Maybe<Scalars["Boolean"]["output"]>;
	/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
	restBase?: Maybe<Scalars["String"]["output"]>;
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?: Maybe<Scalars["String"]["output"]>;
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to show the taxonomy in the admin menu */
	showInMenu?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
	/** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
	edges: Array<TaxonomyConnectionEdge>;
	/** A list of connected Taxonomy Nodes */
	nodes: Array<Taxonomy>;
	/** Information about pagination in a connection. */
	pageInfo: TaxonomyConnectionPageInfo;
};

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Taxonomy Node */
	node: Taxonomy;
};

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Allowed taxonomies */
export type TaxonomyEnum =
	/** Taxonomy enum category */
	| "CATEGORY"
	/** Taxonomy enum post_format */
	| "POSTFORMAT"
	/** Taxonomy enum post_tag */
	| "TAG";

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export type TaxonomyIdTypeEnum =
	/** The globally unique ID */
	| "ID"
	/** The name of the taxonomy */
	| "NAME";

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection &
	ContentTypeConnection & {
		/** Edges for the TaxonomyToContentTypeConnection connection */
		edges: Array<TaxonomyToContentTypeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentType>;
		/** Information about pagination in a connection. */
		pageInfo: TaxonomyToContentTypeConnectionPageInfo;
	};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentType;
	};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection &
	TermNodeConnection & {
		/** Edges for the TaxonomyToTermNodeConnection connection */
		edges: Array<TaxonomyToTermNodeConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<TermNode>;
		/** Information about pagination in a connection. */
		pageInfo: TaxonomyToTermNodeConnectionPageInfo;
	};

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge &
	TermNodeConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: TermNode;
	};

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo &
	TermNodeConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** The template assigned to the node */
export type Template_PageNoTitle = ContentTemplate & {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** The template assigned to the node */
export type Template_PageWithSidebar = ContentTemplate & {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** The template assigned to the node */
export type Template_PageWithWideImage = ContentTemplate & {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** The template assigned to the node */
export type Template_SingleWithSidebar = ContentTemplate & {
	/** The name of the template */
	templateName?: Maybe<Scalars["String"]["output"]>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
	/** The number of objects connected to the object */
	count?: Maybe<Scalars["Int"]["output"]>;
	/** Identifies the primary key from the database. */
	databaseId: Scalars["Int"]["output"];
	/** The description of the object */
	description?: Maybe<Scalars["String"]["output"]>;
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
	/** The unique resource identifier path */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The link to the term */
	link?: Maybe<Scalars["String"]["output"]>;
	/** The human friendly name of the object. */
	name?: Maybe<Scalars["String"]["output"]>;
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: Maybe<Scalars["String"]["output"]>;
	/** The name of the taxonomy that the object is associated with */
	taxonomyName?: Maybe<Scalars["String"]["output"]>;
	/** The ID of the term group that this term object belongs to */
	termGroupId?: Maybe<Scalars["Int"]["output"]>;
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: Maybe<Scalars["Int"]["output"]>;
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
	/** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
	edges: Array<TermNodeConnectionEdge>;
	/** A list of connected TermNode Nodes */
	nodes: Array<TermNode>;
	/** Information about pagination in a connection. */
	pageInfo: TermNodeConnectionPageInfo;
};

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected TermNode Node */
	node: TermNode;
};

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export type TermNodeIdTypeEnum =
	/** The Database ID for the node */
	| "DATABASE_ID"
	/** The hashed Global ID */
	| "ID"
	/** The name of the node */
	| "NAME"
	/** Url friendly name of the node */
	| "SLUG"
	/** The URI for the node */
	| "URI";

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection &
	EnqueuedScriptConnection & {
		/** Edges for the TermNodeToEnqueuedScriptConnection connection */
		edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedScript>;
		/** Information about pagination in a connection. */
		pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
	};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge &
	EnqueuedScriptConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedScript;
	};

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection &
	EnqueuedStylesheetConnection & {
		/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
		edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedStylesheet>;
		/** Information about pagination in a connection. */
		pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
	};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge &
	EnqueuedStylesheetConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedStylesheet;
	};

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Options for ordering the connection by */
export type TermObjectsConnectionOrderbyEnum =
	/** Order the connection by item count. */
	| "COUNT"
	/** Order the connection by description. */
	| "DESCRIPTION"
	/** Order the connection by name. */
	| "NAME"
	/** Order the connection by slug. */
	| "SLUG"
	/** Order the connection by term group. */
	| "TERM_GROUP"
	/** Order the connection by term id. */
	| "TERM_ID"
	/** Order the connection by term order. */
	| "TERM_ORDER";

/** A Gravity Forms textarea field. */
export type TextAreaField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRichTextEditorSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Indicates whether the field uses the rich text editor interface. */
		hasRichTextEditor?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A Gravity Forms text field. */
export type TextField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithAutocompleteSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputMaskSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithMaxLengthSetting &
	GfFieldWithPasswordFieldSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/** Whether autocomplete should be enabled for this field. */
		hasAutocomplete?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the field has an input mask. */
		hasInputMask?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The pattern used for the input mask. */
		inputMaskValue?: Maybe<Scalars["String"]["output"]>;
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if a text field input tag should be created with a &quot;password&quot; type. */
		isPasswordInput?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** Specifies the maximum number of characters allowed in a text or textarea (paragraph) field. */
		maxLength?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** A theme object */
export type Theme = Node & {
	/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author?: Maybe<Scalars["String"]["output"]>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri?: Maybe<Scalars["String"]["output"]>;
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique identifier of the theme object. */
	id: Scalars["ID"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name?: Maybe<Scalars["String"]["output"]>;
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot?: Maybe<Scalars["String"]["output"]>;
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug?: Maybe<Scalars["String"]["output"]>;
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri?: Maybe<Scalars["String"]["output"]>;
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version?: Maybe<Scalars["String"]["output"]>;
};

/** Connection to Theme Nodes */
export type ThemeConnection = {
	/** A list of edges (relational context) between RootQuery and connected Theme Nodes */
	edges: Array<ThemeConnectionEdge>;
	/** A list of connected Theme Nodes */
	nodes: Array<Theme>;
	/** Information about pagination in a connection. */
	pageInfo: ThemeConnectionPageInfo;
};

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected Theme Node */
	node: Theme;
};

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms time field. */
export type TimeField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithInputs &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSubLabelPlacementSetting &
	GfFieldWithTimeFormatSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** The inputs for the field. */
		inputs?: Maybe<Array<Maybe<GfFieldInput>>>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** The placement of the labels for the subfields within the group. This setting controls all of the subfields, they cannot be set individually. They may be aligned above or below the inputs. If this property is not set, the “Sub-Label Placement” setting on the Form Settings-&gt;Form Layout page is used. If no setting is specified, the default is above inputs. */
		subLabelPlacement?: Maybe<FormFieldSubLabelPlacementEnum>;
		/** Determines how the time is displayed. */
		timeFormat?: Maybe<TimeFieldFormatEnum>;
		/** Time field value. */
		timeValues?: Maybe<TimeFieldValue>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** How the time is displayed. */
export type TimeFieldFormatEnum =
	/** 12-hour time format. */
	| "H12"
	/** 24-hour time format. */
	| "H24";

/** The individual properties for each element of the Time value field. */
export type TimeFieldValue = {
	/** AM or PM. */
	amPm?: Maybe<AmPmEnum>;
	/** The full display value in 12-hour format. Example: &quot;08:25 am&quot;. */
	displayValue?: Maybe<Scalars["String"]["output"]>;
	/** The hours, in this format: hh. */
	hours?: Maybe<Scalars["String"]["output"]>;
	/** The minutes, in this format: mm. */
	minutes?: Maybe<Scalars["String"]["output"]>;
};

/** TimeInputProperty input values. */
export type TimeInputProperty = GfFieldInput &
	GfFieldInputWithTimeFormatSetting & {
		/** The autocomplete attribute for the field. */
		autocompleteAttribute?: Maybe<Scalars["String"]["output"]>;
		/** The custom label for the input. When set, this is used in place of the label. */
		customLabel?: Maybe<Scalars["String"]["output"]>;
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** The input ID. Input IDs follow the following naming convention: FIELDID.INPUTID (i.e. 5.1), where FIELDID is the id of the containing field and INPUTID specifies the input field. */
		id?: Maybe<Scalars["Float"]["output"]>;
		/** The label to be used for the input. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
	};

/** A Gravity Forms total field. */
export type TotalField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
	/** The unique resource identifier path */
	id: Scalars["ID"]["output"];
	/** Whether the node is a Content Node */
	isContentNode: Scalars["Boolean"]["output"];
	/** Whether the node is a Term */
	isTermNode: Scalars["Boolean"]["output"];
	/** The unique resource identifier path */
	uri?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the updateAgent mutation. */
export type UpdateAgentInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the agent object */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateAgent mutation. */
export type UpdateAgentPayload = {
	/** The Post object mutation type. */
	agent?: Maybe<Agent>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the category object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the category object to update */
	id: Scalars["ID"]["input"];
	/** The name of the category object to mutate */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the category that should be set as the parent */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
	/** The created category */
	category?: Maybe<Category>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
	/** The approval status of the comment. */
	approved?: InputMaybe<Scalars["String"]["input"]>;
	/** The name of the comment's author. */
	author?: InputMaybe<Scalars["String"]["input"]>;
	/** The email of the comment's author. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** The url of the comment's author. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The database ID of the post object the comment belongs to. */
	commentOn?: InputMaybe<Scalars["Int"]["input"]>;
	/** Content of the comment. */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the comment being updated. */
	id: Scalars["ID"]["input"];
	/** Parent comment ID of current comment. */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** The approval status of the comment */
	status?: InputMaybe<CommentStatusEnum>;
	/** Type of comment. */
	type?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The comment that was created */
	comment?: Maybe<Comment>;
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: Maybe<Scalars["Boolean"]["output"]>;
};

/** Entry meta input fields for updating draft Gravity Forms entries. */
export type UpdateDraftEntryMetaInput = {
	/** ID of the user that submitted of the form if a logged in user submitted the form. */
	createdById?: InputMaybe<Scalars["Int"]["input"]>;
	/** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
	dateCreatedGmt?: InputMaybe<Scalars["String"]["input"]>;
	/** Client IP of user who submitted the form. */
	ip?: InputMaybe<Scalars["String"]["input"]>;
	/** Used to overwrite the sourceUrl the form was submitted from. */
	sourceUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** The name and version of both the browser and operating system from which the entry was submitted. */
	userAgent?: InputMaybe<Scalars["String"]["input"]>;
};

/** Entry meta input fields for updating Gravity Forms entries. */
export type UpdateEntryMetaInput = {
	/** ID of the user that submitted of the form if a logged in user submitted the form. */
	createdById?: InputMaybe<Scalars["Int"]["input"]>;
	/** The UTC date the entry was created, in `Y-m-d H:i:s` format. */
	dateCreatedGmt?: InputMaybe<Scalars["String"]["input"]>;
	/** Client IP of user who submitted the form. */
	ip?: InputMaybe<Scalars["String"]["input"]>;
	/** Whether the entry has been read. */
	isRead?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Whether the entry has been starred (i.e marked with a star). */
	isStarred?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Used to overwrite the sourceUrl the form was submitted from. */
	sourceUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** The current status of the entry. */
	status?: InputMaybe<EntryStatusEnum>;
	/** The name and version of both the browser and operating system from which the entry was submitted. */
	userAgent?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input for the updateGfDraftEntry mutation. */
export type UpdateGfDraftEntryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The entry meta values to update. */
	entryMeta?: InputMaybe<UpdateDraftEntryMetaInput>;
	/** The field ids and their values. */
	fieldValues?: InputMaybe<Array<InputMaybe<FormFieldValuesInput>>>;
	/** Either the global ID of the draft entry, or its resume token. */
	id: Scalars["ID"]["input"];
	/** The ID type for the draft entry. Defaults to `ID` . */
	idType?: InputMaybe<DraftEntryIdTypeEnum>;
	/** Whether the field values should be validated on submission. Defaults to false. */
	shouldValidate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the updateGfDraftEntry mutation. */
export type UpdateGfDraftEntryPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The draft entry after the update mutation has been applied. If a validation error occurred, the draft entry will NOT have been updated with the invalid value provided. */
	draftEntry?: Maybe<GfDraftEntry>;
	/** Field validation errors. */
	errors?: Maybe<Array<Maybe<FieldError>>>;
	/** Draft resume URL. If the &quot;Referer&quot; header is not included in the request, this will be an empty string. */
	resumeUrl?: Maybe<Scalars["String"]["output"]>;
};

/** Input for the updateGfEntry mutation. */
export type UpdateGfEntryInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The entry meta values to update. */
	entryMeta?: InputMaybe<UpdateEntryMetaInput>;
	/** The field ids and their values to update. */
	fieldValues?: InputMaybe<Array<InputMaybe<FormFieldValuesInput>>>;
	/** ID of the entry to update, either a global or database ID. */
	id: Scalars["ID"]["input"];
	/** Whether the field values should be validated on submission. Defaults to false. */
	shouldValidate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the updateGfEntry mutation. */
export type UpdateGfEntryPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The entry that was created. */
	entry?: Maybe<GfSubmittedEntry>;
	/** Field errors. */
	errors?: Maybe<Array<Maybe<FieldError>>>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: InputMaybe<Scalars["String"]["input"]>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The caption for the mediaItem */
	caption?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the mediaItem */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the mediaItem */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: InputMaybe<Scalars["String"]["input"]>;
	/** Description of the mediaItem */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The file name of the mediaItem */
	filePath?: InputMaybe<Scalars["String"]["input"]>;
	/** The file type of the mediaItem */
	fileType?: InputMaybe<MimeTypeEnum>;
	/** The ID of the mediaItem object */
	id: Scalars["ID"]["input"];
	/** The ID of the parent object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The ping status for the mediaItem */
	pingStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the mediaItem */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the mediaItem */
	status?: InputMaybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The MediaItem object mutation type. */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the object */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The content of the object */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the page object */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the parent object */
	parentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	page?: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the post_format object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the postFormat object to update */
	id: Scalars["ID"]["input"];
	/** The name of the post_format object to mutate */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The created post_format */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Set connections between the post and categories */
	categories?: InputMaybe<PostCategoriesInput>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The comment status for the object */
	commentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** The content of the object */
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The excerpt of the object */
	excerpt?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the post object */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The ping status for the object */
	pingStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** URLs that have been pinged. */
	pinged?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Set connections between the post and postFormats */
	postFormats?: InputMaybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: InputMaybe<PostTagsInput>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
	/** URLs queued to be pinged. */
	toPing?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	post?: Maybe<Post>;
};

/** Input for the updatePropertie mutation. */
export type UpdatePropertieInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the propertie object */
	id: Scalars["ID"]["input"];
	/** Override the edit lock when another user is editing the post */
	ignoreEditLock?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: InputMaybe<Scalars["Int"]["input"]>;
	/** The password used to protect the content of the object */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The slug of the object */
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** The status of the object */
	status?: InputMaybe<PostStatusEnum>;
	/** The title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updatePropertie mutation. */
export type UpdatePropertiePayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The Post object mutation type. */
	propertie?: Maybe<Propertie>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?: InputMaybe<Scalars["String"]["input"]>;
	/** A date format for all date strings. */
	generalSettingsDateFormat?: InputMaybe<Scalars["String"]["input"]>;
	/** Site tagline. */
	generalSettingsDescription?: InputMaybe<Scalars["String"]["input"]>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** WordPress locale code. */
	generalSettingsLanguage?: InputMaybe<Scalars["String"]["input"]>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?: InputMaybe<Scalars["Int"]["input"]>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat?: InputMaybe<Scalars["String"]["input"]>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone?: InputMaybe<Scalars["String"]["input"]>;
	/** Site title. */
	generalSettingsTitle?: InputMaybe<Scalars["String"]["input"]>;
	/** Site URL. */
	generalSettingsUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the page that should display the latest posts */
	readingSettingsPageForPosts?: InputMaybe<Scalars["Int"]["input"]>;
	/** The ID of the page that should be displayed on the front page */
	readingSettingsPageOnFront?: InputMaybe<Scalars["Int"]["input"]>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?: InputMaybe<Scalars["Int"]["input"]>;
	/** What to show on the front page */
	readingSettingsShowOnFront?: InputMaybe<Scalars["String"]["input"]>;
	/** Default post category. */
	writingSettingsDefaultCategory?: InputMaybe<Scalars["Int"]["input"]>;
	/** Default post format. */
	writingSettingsDefaultPostFormat?: InputMaybe<Scalars["String"]["input"]>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
	/** Update all settings. */
	allSettings?: Maybe<Settings>;
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Update the DiscussionSettings setting. */
	discussionSettings?: Maybe<DiscussionSettings>;
	/** Update the GeneralSettings setting. */
	generalSettings?: Maybe<GeneralSettings>;
	/** Update the ReadingSettings setting. */
	readingSettings?: Maybe<ReadingSettings>;
	/** Update the WritingSettings setting. */
	writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The description of the post_tag object */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the tag object to update */
	id: Scalars["ID"]["input"];
	/** The name of the post_tag object to mutate */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The created post_tag */
	tag?: Maybe<Tag>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
	/** User's AOL IM account. */
	aim?: InputMaybe<Scalars["String"]["input"]>;
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing content about the user. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	/** A string containing the user's email address. */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** 	The user's first name. */
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	/** The ID of the user */
	id: Scalars["ID"]["input"];
	/** User's Jabber account. */
	jabber?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's last name. */
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	/** User's locale. */
	locale?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: InputMaybe<Scalars["String"]["input"]>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: InputMaybe<Scalars["String"]["input"]>;
	/** A string that contains the plain text password for the user. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: InputMaybe<Scalars["String"]["input"]>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: InputMaybe<Scalars["String"]["input"]>;
	/** An array of roles to be assigned to the user. */
	roles?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** User's Yahoo IM account. */
	yim?: InputMaybe<Scalars["String"]["input"]>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The User object mutation type. */
	user?: Maybe<User>;
};

/** A User object */
export type User = Commenter &
	DatabaseIdentifier &
	Node &
	UniformResourceIdentifiable & {
		/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
		avatar?: Maybe<Avatar>;
		/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
		capKey?: Maybe<Scalars["String"]["output"]>;
		/** A list of capabilities (permissions) granted to the user */
		capabilities?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** Connection between the User type and the Comment type */
		comments?: Maybe<UserToCommentConnection>;
		/** Identifies the primary key from the database. */
		databaseId: Scalars["Int"]["output"];
		/** Description of the user. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
		email?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the User type and the EnqueuedScript type */
		enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
		/** Connection between the User type and the EnqueuedStylesheet type */
		enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
		/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
		extraCapabilities?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
		/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
		firstName?: Maybe<Scalars["String"]["output"]>;
		/** The globally unique identifier for the user object. */
		id: Scalars["ID"]["output"];
		/** Whether the node is a Content Node */
		isContentNode: Scalars["Boolean"]["output"];
		/** Whether the object is restricted from the current viewer */
		isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
		/** Whether the node is a Term */
		isTermNode: Scalars["Boolean"]["output"];
		/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
		lastName?: Maybe<Scalars["String"]["output"]>;
		/** The preferred language locale set for the user. Value derived from get_user_locale(). */
		locale?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the User type and the mediaItem type */
		mediaItems?: Maybe<UserToMediaItemConnection>;
		/** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
		name?: Maybe<Scalars["String"]["output"]>;
		/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
		nicename?: Maybe<Scalars["String"]["output"]>;
		/** Nickname of the user. */
		nickname?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the User type and the page type */
		pages?: Maybe<UserToPageConnection>;
		/** Connection between the User type and the post type */
		posts?: Maybe<UserToPostConnection>;
		/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
		registeredDate?: Maybe<Scalars["String"]["output"]>;
		/** Connection between the User and Revisions authored by the user */
		revisions?: Maybe<UserToRevisionsConnection>;
		/** Connection between the User type and the UserRole type */
		roles?: Maybe<UserToUserRoleConnection>;
		/** Whether the Toolbar should be displayed when the user is viewing the site. */
		shouldShowAdminToolbar?: Maybe<Scalars["Boolean"]["output"]>;
		/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
		slug?: Maybe<Scalars["String"]["output"]>;
		/** The unique resource identifier path */
		uri?: Maybe<Scalars["String"]["output"]>;
		/** A website url that is associated with the user. */
		url?: Maybe<Scalars["String"]["output"]>;
		/**
		 * The Id of the user. Equivalent to WP_User-&gt;ID
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		userId?: Maybe<Scalars["Int"]["output"]>;
		/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
		username?: Maybe<Scalars["String"]["output"]>;
	};

/** A User object */
export type UserAvatarArgs = {
	forceDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
	rating?: InputMaybe<AvatarRatingEnum>;
	size?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A User object */
export type UserCommentsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserEnqueuedScriptsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A User object */
export type UserMediaItemsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};

/** A User object */
export type UserRolesArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	before?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Connection to User Nodes */
export type UserConnection = {
	/** A list of edges (relational context) between RootQuery and connected User Nodes */
	edges: Array<UserConnectionEdge>;
	/** A list of connected User Nodes */
	nodes: Array<User>;
	/** Information about pagination in a connection. */
	pageInfo: UserConnectionPageInfo;
};

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected User Node */
	node: User;
};

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export type UserNodeIdTypeEnum =
	/** The Database ID for the node */
	| "DATABASE_ID"
	/** The Email of the User */
	| "EMAIL"
	/** The hashed Global ID */
	| "ID"
	/** The slug of the User */
	| "SLUG"
	/** The URI for the node */
	| "URI"
	/** The username the User uses to login with */
	| "USERNAME";

/** A user role object */
export type UserRole = Node & {
	/** The capabilities that belong to this role */
	capabilities?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	/** The display name of the role */
	displayName?: Maybe<Scalars["String"]["output"]>;
	/** The globally unique identifier for the user role object. */
	id: Scalars["ID"]["output"];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars["Boolean"]["output"]>;
	/** The registered name of the role */
	name?: Maybe<Scalars["String"]["output"]>;
};

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
	/** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
	edges: Array<UserRoleConnectionEdge>;
	/** A list of connected UserRole Nodes */
	nodes: Array<UserRole>;
	/** Information about pagination in a connection. */
	pageInfo: UserRoleConnectionPageInfo;
};

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
	/** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
	cursor?: Maybe<Scalars["String"]["output"]>;
	/** The connected UserRole Node */
	node: UserRole;
};

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** Names of available user roles */
export type UserRoleEnum =
	/** User role with specific capabilities */
	| "ADMINISTRATOR"
	/** User role with specific capabilities */
	| "AUTHOR"
	/** User role with specific capabilities */
	| "CONTRIBUTOR"
	/** User role with specific capabilities */
	| "EDITOR"
	/** User role with specific capabilities */
	| "SUBSCRIBER";

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection &
	Connection & {
		/** Edges for the UserToCommentConnection connection */
		edges: Array<UserToCommentConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Comment>;
		/** Information about pagination in a connection. */
		pageInfo: UserToCommentConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Comment;
	};

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of author IDs to include comments for. */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Comment author URL. */
	authorUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of comment IDs to include. */
	commentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Include comments of a given type. */
	commentType?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: InputMaybe<Scalars["String"]["input"]>;
	/** Content object author ID to limit results by. */
	contentAuthor?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: InputMaybe<Scalars["ID"]["input"]>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
	contentName?: InputMaybe<Scalars["String"]["input"]>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: InputMaybe<Scalars["Int"]["input"]>;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Comment status to limit results by. */
	status?: InputMaybe<Scalars["String"]["input"]>;
	/** Include comments for a specific user ID. */
	userId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection &
	EnqueuedScriptConnection & {
		/** Edges for the UserToEnqueuedScriptConnection connection */
		edges: Array<UserToEnqueuedScriptConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedScript>;
		/** Information about pagination in a connection. */
		pageInfo: UserToEnqueuedScriptConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge &
	EnqueuedScriptConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedScript;
	};

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection &
	EnqueuedStylesheetConnection & {
		/** Edges for the UserToEnqueuedStylesheetConnection connection */
		edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<EnqueuedStylesheet>;
		/** Information about pagination in a connection. */
		pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge &
	EnqueuedStylesheetConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: EnqueuedStylesheet;
	};

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection &
	MediaItemConnection & {
		/** Edges for the UserToMediaItemConnection connection */
		edges: Array<UserToMediaItemConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<MediaItem>;
		/** Information about pagination in a connection. */
		pageInfo: UserToMediaItemConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge &
	MediaItemConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: MediaItem;
	};

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection &
	PageConnection & {
		/** Edges for the UserToPageConnection connection */
		edges: Array<UserToPageConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Page>;
		/** Information about pagination in a connection. */
		pageInfo: UserToPageConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge &
	PageConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Page;
	};

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection &
	PostConnection & {
		/** Edges for the UserToPostConnection connection */
		edges: Array<UserToPostConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<Post>;
		/** Information about pagination in a connection. */
		pageInfo: UserToPostConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge &
	PostConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: Post;
	};

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo &
	PostConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: InputMaybe<Scalars["Int"]["input"]>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: InputMaybe<Scalars["String"]["input"]>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Category ID */
	categoryId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Use Category Slug */
	categoryName?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: InputMaybe<Scalars["String"]["input"]>;
	/** Use Tag ID */
	tagId?: InputMaybe<Scalars["String"]["input"]>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Array of tag slugs, used to display objects from one tag AND another */
	tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Array of tag slugs, used to include objects in ANY specified tags */
	tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection &
	ContentNodeConnection & {
		/** Edges for the UserToRevisionsConnection connection */
		edges: Array<UserToRevisionsConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<ContentNode>;
		/** Information about pagination in a connection. */
		pageInfo: UserToRevisionsConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge &
	Edge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: ContentNode;
	};

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo &
	PageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: InputMaybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Specific database ID of the object */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Array of IDs for the objects to retrieve */
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: InputMaybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** What parameter to use to order the objects by. */
	orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: InputMaybe<Scalars["ID"]["input"]>;
	/** Specify objects whose parent is in an array */
	parentIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Show posts with a specific password. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Show Posts based on a keyword search */
	search?: InputMaybe<Scalars["String"]["input"]>;
	/** Retrieve posts where post status is in an array. */
	stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
	/** Show posts with a specific status. */
	status?: InputMaybe<PostStatusEnum>;
	/** Title of the object */
	title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection &
	UserRoleConnection & {
		/** Edges for the UserToUserRoleConnection connection */
		edges: Array<UserToUserRoleConnectionEdge>;
		/** The nodes of the connection, without the edges */
		nodes: Array<UserRole>;
		/** Information about pagination in a connection. */
		pageInfo: UserToUserRoleConnectionPageInfo;
	};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge &
	UserRoleConnectionEdge & {
		/** A cursor for use in pagination */
		cursor?: Maybe<Scalars["String"]["output"]>;
		/** The item at the end of the edge */
		node: UserRole;
	};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo &
	UserRoleConnectionPageInfo &
	WpPageInfo & {
		/** When paginating forwards, the cursor to continue. */
		endCursor?: Maybe<Scalars["String"]["output"]>;
		/** When paginating forwards, are there more items? */
		hasNextPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, are there more items? */
		hasPreviousPage: Scalars["Boolean"]["output"];
		/** When paginating backwards, the cursor to continue. */
		startCursor?: Maybe<Scalars["String"]["output"]>;
	};

/** Field to order the connection by */
export type UsersConnectionOrderbyEnum =
	/** Order by display name */
	| "DISPLAY_NAME"
	/** Order by email address */
	| "EMAIL"
	/** Order by login */
	| "LOGIN"
	/** Preserve the login order given in the LOGIN_IN array */
	| "LOGIN_IN"
	/** Order by nice name */
	| "NICE_NAME"
	/** Preserve the nice name order given in the NICE_NAME_IN array */
	| "NICE_NAME_IN"
	/** Order by registration date */
	| "REGISTERED"
	/** Order by URL */
	| "URL";

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
	/** The field name used to sort the results. */
	field: UsersConnectionOrderbyEnum;
	/** The cardinality of the order of the connection */
	order?: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export type UsersConnectionSearchColumnEnum =
	/** The user's email address. */
	| "EMAIL"
	/** The globally unique ID. */
	| "ID"
	/** The username the User uses to login with. */
	| "LOGIN"
	/** A URL-friendly name for the user. The default is the user's username. */
	| "NICENAME"
	/** The URL of the user's website. */
	| "URL";

/** Information about pagination in a connection. */
export type WpPageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["String"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A Gravity Forms website field. */
export type WebsiteField = FormField &
	GfFieldWithAdminLabelSetting &
	GfFieldWithConditionalLogicSetting &
	GfFieldWithCssClassSetting &
	GfFieldWithDefaultValueSetting &
	GfFieldWithDescriptionSetting &
	GfFieldWithDuplicatesSetting &
	GfFieldWithErrorMessageSetting &
	GfFieldWithLabelPlacementSetting &
	GfFieldWithLabelSetting &
	GfFieldWithPersonalData &
	GfFieldWithPlaceholderSetting &
	GfFieldWithPrepopulateFieldSetting &
	GfFieldWithRulesSetting &
	GfFieldWithSizeSetting & {
		/** When specified, the value of this property will be used on the admin pages instead of the label. It is useful for fields with long labels. */
		adminLabel?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field’s value can be pre-populated dynamically. */
		canPrepopulate?: Maybe<Scalars["Boolean"]["output"]>;
		/** Controls the visibility of the field based on values selected by the user. */
		conditionalLogic?: Maybe<ConditionalLogic>;
		/** String containing the custom CSS classes to be added to the &lt;li&gt; tag that contains the field. Useful for applying custom formatting to specific fields. */
		cssClass?: Maybe<Scalars["String"]["output"]>;
		/** Field database ID. */
		databaseId: Scalars["Int"]["output"];
		/** Contains the default value for the field. When specified, the field&#039;s value will be populated with the contents of this property when the form is displayed. */
		defaultValue?: Maybe<Scalars["String"]["output"]>;
		/** Field description. */
		description?: Maybe<Scalars["String"]["output"]>;
		/** The placement of the field description. */
		descriptionPlacement?: Maybe<FormFieldDescriptionPlacementEnum>;
		/** Indicates the field is only displayed and its contents are not submitted with the form/saved with the entry. This is set to true. */
		displayOnly?: Maybe<Scalars["Boolean"]["output"]>;
		/** Contains the message that is displayed for fields that fail validation. */
		errorMessage?: Maybe<Scalars["String"]["output"]>;
		/**
		 * Field database ID.
		 * @deprecated This field will be changing to return a Global ID in a future release. Future-proof your code and use databaseId instead.
		 */
		id: Scalars["Int"]["output"];
		/** Assigns a name to this field so that it can be populated dynamically via this input name. Only applicable when canPrepopulate is `true`. */
		inputName?: Maybe<Scalars["String"]["output"]>;
		/** The base form field type used to display the input. A good example is the Post Custom Field that can be displayed as various different types of fields. */
		inputType?: Maybe<FormFieldTypeEnum>;
		/** Determines if the field requires the user to enter a value. Fields marked as required will prevent the form from being submitted if the user has not entered a value in it. */
		isRequired?: Maybe<Scalars["Boolean"]["output"]>;
		/** Field label that will be displayed on the form and on the admin pages. */
		label?: Maybe<Scalars["String"]["output"]>;
		/** The field label position. */
		labelPlacement?: Maybe<FormFieldLabelPlacementEnum>;
		/** The number of CSS grid columns the field should span. */
		layoutGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The number of CSS grid columns the spacer field following this one should span. */
		layoutSpacerGridColumnSpan?: Maybe<Scalars["Int"]["output"]>;
		/** The form page this field is located on. Default is 1. */
		pageNumber?: Maybe<Scalars["Int"]["output"]>;
		/** The form field-specifc policies for exporting and erasing personal data. */
		personalData?: Maybe<FormFieldDataPolicy>;
		/** Placeholder text to give the user a hint on how to fill out the field. This is not submitted with the form. */
		placeholder?: Maybe<Scalars["String"]["output"]>;
		/** Determines if the field allows duplicate submissions. */
		shouldAllowDuplicates?: Maybe<Scalars["Boolean"]["output"]>;
		/** Determines the size of the field when displayed on the page. */
		size?: Maybe<FormFieldSizeEnum>;
		/** The type of field to be displayed. */
		type?: Maybe<FormFieldTypeEnum>;
		/** The string-formatted entry value for the `formField`. For complex fields this might be a JSON-encoded or serialized array. */
		value?: Maybe<Scalars["String"]["output"]>;
		/** Field visibility. */
		visibility?: Maybe<FormFieldVisibilityEnum>;
	};

/** Provides access to fields of the &quot;AgentFields&quot; ACF Field Group via the &quot;agentFields&quot; field */
export type WithAcfAgentFields = {
	/** Fields of the AgentFields ACF Field Group */
	agentFields?: Maybe<AgentFields>;
};

/** Provides access to fields of the &quot;PropertieFields&quot; ACF Field Group via the &quot;propertieFields&quot; field */
export type WithAcfPropertieFields = {
	/** Fields of the PropertieFields ACF Field Group */
	propertieFields?: Maybe<PropertieFields>;
};

/** The writing setting type */
export type WritingSettings = {
	/** Default post category. */
	defaultCategory?: Maybe<Scalars["Int"]["output"]>;
	/** Default post format. */
	defaultPostFormat?: Maybe<Scalars["String"]["output"]>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AgentDetailsFragment = {
	agentFields?: {
		email?: string | null;
		phoneNumber?: string | null;
		agentsLocation?: string | null;
		agentsDescription?: string | null;
		avatar?: { node: { mediaItemUrl?: string | null } } | null;
		relationWithProperties?: {
			nodes: Array<
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
			>;
		} | null;
	} | null;
};

export type AgentGetBySlugQueryVariables = Exact<{
	AgentID: Scalars["ID"]["input"];
}>;

export type AgentGetBySlugQuery = {
	agent?: {
		date?: string | null;
		title?: string | null;
		agentFields?: {
			email?: string | null;
			phoneNumber?: string | null;
			agentsLocation?: string | null;
			agentsDescription?: string | null;
			avatar?: { node: { mediaItemUrl?: string | null } } | null;
			relationWithProperties?: {
				nodes: Array<
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
				>;
			} | null;
		} | null;
	} | null;
};

export type GetAgentsListQueryVariables = Exact<{ [key: string]: never }>;

export type GetAgentsListQuery = {
	agents?: {
		nodes: Array<{
			date?: string | null;
			title?: string | null;
			slug?: string | null;
			featuredImage?: { node: { mediaItemUrl?: string | null } } | null;
			agentFields?: { email?: string | null; phoneNumber?: string | null } | null;
		}>;
	} | null;
};

export type GetPropertiesListQueryVariables = Exact<{ [key: string]: never }>;

export type GetPropertiesListQuery = {
	properties?: {
		nodes: Array<{
			slug?: string | null;
			propertieFields?: {
				area?: number | null;
				price?: number | null;
				numberOfRooms?: number | null;
				numberOfBeds?: number | null;
				buyOrLease?: Array<string | null> | null;
				map?: {
					city?: string | null;
					streetName?: string | null;
					streetNumber?: string | null;
					postCode?: string | null;
					country?: string | null;
					state?: string | null;
				} | null;
				images?: { nodes: Array<{ mediaItemUrl?: string | null }> } | null;
			} | null;
		}>;
	} | null;
};

export type PropertieDetailsFragment = {
	propertieFields?: {
		area?: number | null;
		price?: number | null;
		propertyDescription?: string | null;
		numberOfRooms?: number | null;
		numberOfBeds?: number | null;
		buyOrLease?: Array<string | null> | null;
		typeOfDevelopment?: string | null;
		map?: {
			city?: string | null;
			country?: string | null;
			postCode?: string | null;
			streetName?: string | null;
			placeId?: string | null;
			longitude?: number | null;
			latitude?: number | null;
			state?: string | null;
			streetAddress?: string | null;
		} | null;
		relationWithProperties?: {
			nodes: Array<
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
				| { slug?: string | null }
			>;
		} | null;
		images?: { nodes: Array<{ mediaItemUrl?: string | null }> } | null;
	} | null;
};

export type PropertieGetbySlugQueryVariables = Exact<{
	ProperiteID: Scalars["ID"]["input"];
}>;

export type PropertieGetbySlugQuery = {
	propertie?: {
		modified?: string | null;
		date?: string | null;
		title?: string | null;
		propertieFields?: {
			area?: number | null;
			price?: number | null;
			propertyDescription?: string | null;
			numberOfRooms?: number | null;
			numberOfBeds?: number | null;
			buyOrLease?: Array<string | null> | null;
			typeOfDevelopment?: string | null;
			map?: {
				city?: string | null;
				country?: string | null;
				postCode?: string | null;
				streetName?: string | null;
				placeId?: string | null;
				longitude?: number | null;
				latitude?: number | null;
				state?: string | null;
				streetAddress?: string | null;
			} | null;
			relationWithProperties?: {
				nodes: Array<
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
					| { slug?: string | null }
				>;
			} | null;
			images?: { nodes: Array<{ mediaItemUrl?: string | null }> } | null;
		} | null;
	} | null;
};

export type SubmitFormMutationVariables = Exact<{
	FirstName: Scalars["String"]["input"];
	SecondName: Scalars["String"]["input"];
	PhoneNumber: Scalars["String"]["input"];
	Comments: Scalars["String"]["input"];
}>;

export type SubmitFormMutation = {
	submitGfForm?: {
		errors?: Array<{ message?: string | null; id?: number | null } | null> | null;
		confirmation?: { message?: string | null } | null;
	} | null;
};

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const AgentDetailsFragmentDoc = new TypedDocumentString(
	`
    fragment AgentDetails on WithAcfAgentFields {
  agentFields {
    email
    phoneNumber
    agentsLocation
    agentsDescription
    avatar {
      node {
        mediaItemUrl
      }
    }
    relationWithProperties {
      nodes {
        slug
      }
    }
  }
}
    `,
	{ fragmentName: "AgentDetails" },
) as unknown as TypedDocumentString<AgentDetailsFragment, unknown>;
export const PropertieDetailsFragmentDoc = new TypedDocumentString(
	`
    fragment PropertieDetails on WithAcfPropertieFields {
  propertieFields {
    map {
      city
      country
      postCode
      streetName
      placeId
      longitude
      latitude
      state
      streetAddress
    }
    area
    price
    propertyDescription
    numberOfRooms
    numberOfBeds
    buyOrLease
    typeOfDevelopment
    relationWithProperties {
      nodes {
        slug
      }
    }
    images {
      nodes {
        mediaItemUrl
      }
    }
  }
}
    `,
	{ fragmentName: "PropertieDetails" },
) as unknown as TypedDocumentString<PropertieDetailsFragment, unknown>;
export const AgentGetBySlugDocument = new TypedDocumentString(`
    query AgentGetBySlug($AgentID: ID!) {
  agent(id: $AgentID, idType: SLUG) {
    date
    title
    ...AgentDetails
  }
}
    fragment AgentDetails on WithAcfAgentFields {
  agentFields {
    email
    phoneNumber
    agentsLocation
    agentsDescription
    avatar {
      node {
        mediaItemUrl
      }
    }
    relationWithProperties {
      nodes {
        slug
      }
    }
  }
}`) as unknown as TypedDocumentString<AgentGetBySlugQuery, AgentGetBySlugQueryVariables>;
export const GetAgentsListDocument = new TypedDocumentString(`
    query GetAgentsList {
  agents {
    nodes {
      date
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      agentFields {
        email
        phoneNumber
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetAgentsListQuery, GetAgentsListQueryVariables>;
export const GetPropertiesListDocument = new TypedDocumentString(`
    query GetPropertiesList {
  properties(first: 6) {
    nodes {
      slug
      propertieFields {
        map {
          city
          streetName
          streetNumber
          postCode
          country
          state
        }
        area
        price
        numberOfRooms
        numberOfBeds
        buyOrLease
        images {
          nodes {
            mediaItemUrl
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetPropertiesListQuery, GetPropertiesListQueryVariables>;
export const PropertieGetbySlugDocument = new TypedDocumentString(`
    query PropertieGetbySlug($ProperiteID: ID!) {
  propertie(id: $ProperiteID, idType: SLUG) {
    modified
    date
    title
    ...PropertieDetails
  }
}
    fragment PropertieDetails on WithAcfPropertieFields {
  propertieFields {
    map {
      city
      country
      postCode
      streetName
      placeId
      longitude
      latitude
      state
      streetAddress
    }
    area
    price
    propertyDescription
    numberOfRooms
    numberOfBeds
    buyOrLease
    typeOfDevelopment
    relationWithProperties {
      nodes {
        slug
      }
    }
    images {
      nodes {
        mediaItemUrl
      }
    }
  }
}`) as unknown as TypedDocumentString<PropertieGetbySlugQuery, PropertieGetbySlugQueryVariables>;
export const SubmitFormDocument = new TypedDocumentString(`
    mutation SubmitForm($FirstName: String!, $SecondName: String!, $PhoneNumber: String!, $Comments: String!) {
  submitGfForm(
    input: {id: 1, fieldValues: [{id: 1, nameValues: {first: $FirstName, last: $SecondName}}, {id: 4, value: $PhoneNumber}, {id: 3, value: $Comments}]}
  ) {
    errors {
      message
      id
    }
    confirmation {
      message
    }
  }
}
    `) as unknown as TypedDocumentString<SubmitFormMutation, SubmitFormMutationVariables>;
