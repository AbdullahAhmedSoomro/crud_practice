import { Controller, Get, Post, Req, HttpCode, Header } from '@nestjs/common';
import { Request } from 'express';

/// This is a controller for the cats route
@Controller('cats')
export class CatsController {

    /// This is a route handler for the /cats/all route
    /// Endpoint: http://localhost:3000/cats/all
    /// Method: GET
    /// Returns: This action returns all cats as a string
    @Get('all')
    findAll(): string {
        return 'This action returns all cats';
    }
    
    /// This is a route handler for the /cats/req route
    /// Endpoint: http://localhost:3000/cats/req
    /// Method: GET
    /// Returns: This action returns all cats as a string
    /// This route handler uses the @Req() decorator to get the request object
    /// from the express library
    /// The request object is then used to get the request headers
    /// The request headers are then returned as a string
    // @Get('req')
    // findAllReq(@Req() request: Request): string {
    //     return 'This action returns all cats req';
    // }


    /// This is a route handler for the /cats/create route
    /// Endpoint: http://localhost:3000/cats/create
    /// Method: POST
    /// Returns: This action adds a new cat as a string
    @Post('create')
    create(): string {
        return 'This action adds a new cat';
    }
    

    /// This is a route handler for the /cats/create route
    /// Endpoint: http://localhost:3000/cats/create
    /// Method: POST
    /// Returns: This action adds a new cat as a string
    /// This route handler uses the @HttpCode() decorator to set the HTTP status code
    @Post('create-http-code')
    @HttpCode(204)
    createWithHttpCode(): string {
        return 'This action adds a new cat httpCode 204';
    }


    @Post('create-header')
    @Header('Cache-Control', 'none')
    createWithHeader() {
        return 'This action adds a new cat header';
    }


    /// This is a route handler for the /cats/ab*cd route
    /// Endpoint: http://localhost:3000/cats/abcd
    /// Method: GET
    /// Returns: This action uses a wildcard
    /// This route handler uses a wildcard to match any route that starts with ab and ends with cd
    /// Warning
    /// A wildcard in the middle of the route is only supported by express.
    @Get('ab*cd')
    findAllWildCard() {
        return 'This route uses a wildcard';
    }



}
