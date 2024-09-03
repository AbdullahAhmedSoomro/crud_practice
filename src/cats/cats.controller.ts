import { Controller, Get, Post, Body, Req, HttpCode, Header, Redirect, Query, Param, Delete, Put, HttpStatus, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

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

    @Get('response')
    findAllRes(@Res() res: Response) {
        res.status(HttpStatus.OK).json(['asd']);
    }

    /// This is a route handler for the /cats/second route
    /// Endpoint: http://localhost:3000/cats/second
    /// Method: GET
    /// Returns: This action returns all cats as a string
    /// This route handler uses the @Get() decorator to define the route handler
    /// The route handler returns an empty array
    @Get()
    async findAllSecond(): Promise<any[]> {
        return [];
    }

    @Get()
    findAllObservable(): Observable<any[]> {
        return of([]);
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

    /// This is a route handler for the /cats/redirect route
    /// Endpoint: http://localhost:3000/cats/redirect
    /// Method: GET
    /// Returns: This action redirects to the nestjs website
    /// This route handler uses the @Redirect() decorator to redirect to the nestjs website

    @Get('redirect')
    @Redirect('https://nestjs.com', 301)
    redirect() {
        return 'This is a redirect';
    }

    /// This is a route handler for the /cats/docs route
    /// Endpoint: http://localhost:3000/cats/docs
    /// Method: GET
    /// Returns: This action redirects to the nestjs documentation website
    /// This route handler uses the @Redirect() decorator to redirect to the nestjs documentation website
    /// The route handler also uses the @Query() decorator to get the query parameter version
    /// If the version query parameter is set to 5, the route handler redirects to the nestjs documentation for version 5
    /// Otherwise, it redirects to the nestjs documentation
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version: string) {
    if (version && version === '5') {
            return { 
                url: 'https://docs.nestjs.com/v5/' 
            };
        }
    }

    /// This is a route handler for the /cats/:id route
    /// Endpoint: http://localhost:3000/cats/1
    /// Method: GET
    /// Returns: This action returns a #1 cat
    /// This route handler uses the @Param() decorator to get the route parameter id
    /// The id is then returned as a string
    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;

    }

    /// This is a route handler for the /cats/:id route
    /// Endpoint: http://localhost:3000/cats/1
    /// Method: GET
    /// Returns: This action returns a #1 cat
    /// This route handler uses the @Param() decorator to get the route parameter id
    /// The id is then returned as a string
    @Get(':id')
    findSecond(@Param('id') id: string): string {
        return `Second: This action returns a #${id} cat`;
    }


    /// Using DTO
    /// This is a route handler for the /cats/create route
    /// Endpoint: http://localhost:3000/cats/create
    /// Method: POST
    /// Returns: This action adds a new cat as a string
    /// This route handler uses the @Body() decorator to get the request body
    /// The request body is then returned as a string

    @Post()
    async createCat(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
    
    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //   return `This action updates a #${id} cat`;
    // }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }
}
