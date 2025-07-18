/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import AccessorArray = require( '@stdlib/array-base-accessor' );
import nanmeanpn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanmeanpn( x ); // $ExpectType number
	nanmeanpn( new AccessorArray( x ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanmeanpn( 10 ); // $ExpectError
	nanmeanpn( '10' ); // $ExpectError
	nanmeanpn( true ); // $ExpectError
	nanmeanpn( false ); // $ExpectError
	nanmeanpn( null ); // $ExpectError
	nanmeanpn( undefined ); // $ExpectError
	nanmeanpn( {} ); // $ExpectError
	nanmeanpn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanmeanpn(); // $ExpectError
	nanmeanpn( x, {} ); // $ExpectError
}
