import moment from "moment";
import React from "react";
import './News.css';

export default function News({ news: { sectionName, webUrl, webTitle, webPublicationDate }}){
    function formatDate (date){
        return moment(date).format("DD/MM/YYYY H:m:s");
    }
    return (
      <div className="list-item News">
        <label className="sectionType">{sectionName}</label>
        <a href={webUrl}><label className="webTitle">{webTitle}</label></a>
        <label className="webPublicationDate">{formatDate(webPublicationDate)}</label>
      </div>
    );
  }