import React from 'react';

const EditPostList = (props) => {
    const {title, _id} = props.blog

    const deleteBlogPost = id => {
        fetch(`http://localhost:7000/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('Delete successfully', result)
        })

    }
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                        <td>{props.index + 1}</td>
                        <td>{title}</td>
                        <td>
                            <div className="updateDelete">
                                <button className="btn btn-danger btn-rounded" onClick={() => deleteBlogPost(_id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EditPostList;