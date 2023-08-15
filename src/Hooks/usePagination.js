import React, {
    useState
} from 'react';

import {
    slice,
    merge,
    assign,
} from 'lodash';

import { paginate } from './../Data/paginations/paginate';

export function usePagination(){
    const [data, setData] = useState(paginate.data);
    const [config, setConfig] = useState(paginate.config);

    /**
     * Initialize pagination.
     *
     * @param Object config
     * @return void
     */
    const initPagination = ({
        items, perPage, pageNumber
    }) => {
        setData(merge(data,{
            items: items ?? []
        }));

        setConfig(merge(config,{
            perPage: perPage ?? 1,
            pageNumber: pageNumber ?? 1,
            pages: (items?.length ?? 0 / perPage ?? 0),
        }));
    };
    
    /**
     * Get items from the pagination.
     *
     * @return Object
     */
    const getItems = () => {
        return data.items;
    };

    /**
     * Set items in the pagination.
     *
     * @param items
     * @return void
     */
    const setItems = (items) => {
        setData(merge({
            items: items,
            currentItems: items
        }));

        setConfig(merge(config, {
            pages: items?.length ?? 0,
        }));
    };

    /**
     * Get number of pages.
     *
     * @return Number
     */
    const getPages = () => {
        return config.pages;
    };

    /**
     * Get number of items per page.
     *
     * @return Number
     */
    const getPerPage = () => {
        return config.perPage;
    };

    /**
     * Set number of items per page.
     *
     * @param Number perPage
     * @return void
     */
    const setPerPage = (perPage) => {
        setConfig(merge(config, {
            perPage: perPage,
        }));
    };

    /**
     * Get current page number.
     *
     * @return Number
     */
    const getPageNumber = () => {
        return config.pageNumber;
    };

    /**
     * Get current page items.
     *
     * @return Object
     */
    const getCurrentPageItems = () => {
        return data.currentItems;
    };

    /**
     * Forward to next page.
     *
     * @return void
     */
    const nextPage = () => {
        if((config.pageNumber + 1) > config.pages){
            return;
        }

        setConfig(merge(config,{
            pageNumber: config.pageNumber + 1
        }));
    }

    /**
     * Backward to previous page.
     *
     * @return void
     */
    const previousPage = () => {
        if((config.pageNumber - 1) < 1){
            return;
        }

        setConfig(merge(config,{
            pageNumber: config.pageNumber - 1
        }));
    }

    /**
     * Goto to specified page.
     *
     * @param Number number
     * @return void
     */
    const gotoPage = (number) => {
        if(number < 0){
            return;
        }

        if(number > config.pages){
            return;
        }

        setConfig(merge(config,{ pageNumber: number}));
    }

    /**
     * Paginate data.
     *
     * @return void
     */
    const paginateData = () => {
        setData(assign({}, data,{
            currentItems: ( slice(data.items,
                    ((config.pageNumber - 1)
                      * config.perPage
                    ), config.pageNumber * config.perPage
                )
            )
        }));
    };

    return {
        data, config, handler: {
            paginateData,
            initPagination,
            nextPage, gotoPage, previousPage,
            getItems, setItems, getPages, getPerPage,
            setPerPage, getPageNumber, getCurrentPageItems
        }
    };
}